const express = require("express");
const router = express.Router();
const Store = require('../models/stores');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
      items,
      walletAddress
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
        !items ||
        !walletAddress
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
            items,
            walletAddress
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

  router.get('/get-user/:id', async (req,res) => {
    const _id = req.params.id;
    if(!_id){
      return res.status(422).json({ error: "No ID provided." });
    }
    const user = await Store.findById(_id);
    if(user){
      res.status(200).json(user);
    }else{
      res.status(500).json({ error: "user not found" });
    }
  })

  router.get('/get-all-stores', async (req,res) => {
    const allStores = await Store.find();
    if(allStores){
      res.status(200).json(allStores);
    }else{
      res.status(400).json({error : "No Store Found."})
    }

  })

  router.post('/get-store', async (req,res) => {
    const id = req.body.id;
    const Stores = await Store.findById(id);
    if(Stores){
      res.status(200).json(Stores);
    }else{
      res.status(400).json({error : "No Store Found."})
    }

  })


  router.post('/delete-item', async (req,res) => {
    const email = req.body.email;
    const deleteItem = req.body.item;

    if(!email || !deleteItem){
      return res.status(422).json({ error: "Please fill all the fields." });
    }

    const userFound = await Store.findOne({email : email});

    const deleted = await userFound.deleteItems(deleteItem);

    if(deleted){
      res.json({ message: "Item deleted successfully!" });
    }else{
      res.json({ error: "Item could not be deleted!" });
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
   const rootUser = await Store.findOne({_id:verifyToken._id});
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
