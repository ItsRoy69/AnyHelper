const express = require("express");
const router = express.Router();
const Store = require('../models/stores');
const bcrypt = require("bcrypt");
const auth = require("../middleware/auth");


router.get("/", (req, res) => {
  res.json({ message: "This is the store api" });
});

router.post("/register", async (req, res) => {
    const {
      latitude,
      longitude,
      admin,
      email,
      stype,
      sname,
      password,
      address,
      type
    } = req.body;
  
    if (
        !admin||
        !email||
        !stype||
        !sname||
        !password||
        !address||
        !latitude||
        !longitude||
        !type
    ) {
      return res.status(422).json({ error: "Please fill all the fields." });
    }
  
    try {
      const userSearchByEmail = await Store.findOne({ email: email });
      const userSearchByUsername = await Store.findOne({ sname: sname });
  
      if (userSearchByEmail || userSearchByUsername) {
        return res.status(422).json({ error: "store already exists." });
      }
  
     
        const store = new Store({
            admin,
            email,
            stype,
            sname,
            password,
            address,
            latitude,
            longitude,
            type
        });
  
        const registered = await store.save();
  
        res.status(201).json({ message: "Registered Successfully!", store : store });
      
    } catch (e) {
      res.status(500).json({ message: `Could not create store! --> ${e}` });
    }
  });



  router.post("/login", async (req, res) => {
    try {
      const logEmail = req.body.email;
      const logPass = req.body.password;
  
      if (!logEmail || !logPass) {
        return res.status(422).json({ error: "Please fill all the fields." });
      }
  
      const userEmail = await Store.findOne({ email: logEmail });
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
