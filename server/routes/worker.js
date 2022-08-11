const express = require("express");
const router = express.Router();
const Worker = require('../models/workers');
const bcrypt = require("bcrypt");
const auth = require("../middleware/auth");


router.get("/", (req, res) => {
  res.json({ message: "This is the worker api" });
});

router.post("/register", async (req, res) => {
    const {
      latitude,
      longitude,
      name,
      email,
      profession,
      password,
      phone
    } = req.body;
  
    if (
        !name||
        !email||
        !profession||
        !password||
        !phone||
        !latitude||
        !longitude
    ) {
      return res.status(422).json({ error: "Please fill all the fields." });
    }
  
    try {
      const userSearchByEmail = await Worker.findOne({ email: email });
  
      if (userSearchByEmail) {
        return res.status(422).json({ error: "worker already exists." });
      }
  
     
        const worker = new Worker({
            phone,
            email,
            name,
            password,
            profession,
            latitude,
            longitude
        });
  
        const registered = await worker.save();
  
        res.status(201).json({ message: "Registered Successfully!", worker : worker });
      
    } catch (e) {
      res.status(500).json({ message: `Could not create worker account! --> ${e}` });
    }
  });



  router.post("/login", async (req, res) => {
    try {
      const logEmail = req.body.email;
      const logPass = req.body.password;
  
      if (!logEmail || !logPass) {
        return res.status(422).json({ error: "Please fill all the fields." });
      }
  
      const userEmail = await Worker.findOne({ email: logEmail });
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
