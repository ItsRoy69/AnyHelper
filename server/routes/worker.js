const express = require("express");
const router = express.Router();
const Worker = require('../models/workers');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


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

  router.get('/get-all-workers', async (req,res) => {
    const allWorkers = await Worker.find();
    if(allWorkers){
      res.status(200).json(allWorkers);
    }else{
      res.status(400).json({error : "No Worker Found."})
    }

  })

  router.get('/get-user/:id', async (req,res) => {
    const _id = req.params.id;
    if(!_id){
      return res.status(422).json({ error: "No ID provided." });
    }
    const user = await Worker.findById(_id);
    if(user){
      res.status(200).json(user);
    }else{
      res.status(500).json({ error: "user not found" });
    }
  })
  

  router.post("/logout", async (req, res) => {
    try{
   const authToken = req.body.token;

   console.log(authToken);
 

   const verifyToken = jwt.verify(authToken,process.env.SECRET_KEY);
    if(!authToken){
      return res.status(401).json({ error: "Unauthorized. No Token Provided." });
    }
   const rootUser = await Worker.findOne({_id:verifyToken._id});
   const Tokens = rootUser.tokens;

   const check = Tokens.map((elem) => {
    return elem.token == authToken;
   })
   let response;
   console.log(check);

   if(check.includes(true)){  
   response = await rootUser.deleteToken(authToken);
   }else{
    res.status(404).json({ message: "Invalid Token." });
   }
 

  if(response){
    res.json({ message: "logged out successfully!" });
  }
  }catch (error) {
    res.status(401).send("Unauthorized : No token provided");
    console.log(error);
}
  });


module.exports = router;
