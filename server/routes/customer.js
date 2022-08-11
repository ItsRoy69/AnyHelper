const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const auth = require("../middleware/auth");
const Customer = require("../models/customers");


router.get("/", (req, res) => {
  res.json({ message: "This is the customer api" });
});

router.post("/register", async (req, res) => {
    const {
      latitude,
      longitude,
      email,
      name,
      password,
      address
    } = req.body;
  
    if (
        !email||
        !name||
        !password||
        !address||
        !latitude||
        !longitude
    ) {
      return res.status(422).json({ error: "Please fill all the fields." });
    }
  
    try {
      const userSearchByEmail = await Customer.findOne({ email: email });

  
      if (userSearchByEmail) {
        return res.status(422).json({ error: "customer already exists." });
      }
  
   
        const customer = new Customer({
            email,
            name,
            password,
            address,
            latitude,
            longitude
        });
  
        const registered = await customer.save();
  
        res.status(201).json({ message: "Registered Successfully!", customer : customer });
      
    } catch (e) {
      res.status(500).json({ message: `Could not create customer account! --> ${e}` });
    }
  });



  router.post("/login", async (req, res) => {
    try {
      const logEmail = req.body.email;
      const logPass = req.body.password;
  
      if (!logEmail || !logPass) {
        return res.status(422).json({ error: "Please fill all the fields." });
      }
  
      const userEmail = await Customer.findOne({ email: logEmail });
      const passCheck = await bcrypt.compare(logPass, userEmail.password);
  
      const token = await userEmail.generateAuthToken();
  
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 60000000),
        httpOnly: true,
      });
  
      if (passCheck) {
        res.status(200).json({
          message: "Logged In Successfully!",
          token: token,
          success: true,
          user: userEmail,
        });
      } else {
        res.status(400).json({ message: "Invalid login credentials" });
      }
    } catch (error) {
      res.status(500).json({ message: "Invalid login credentials" });
    }
  });

  router.get("/logout", auth, async (req, res) => {
    try {
      console.log(req.rootUser.tokens);
      req.rootUser.tokens = req.rootUser.tokens.filter((currElem) => {
        return currElem.token != req.token;
      });
      res.status(200).send({ message: "logged out successfully!" });
      await req.rootUser.save();
    } catch (e) {
      res.status(500).send(e);
    }
  });


module.exports = router;
