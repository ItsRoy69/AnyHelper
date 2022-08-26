const express = require("express");
const router = express.Router();
const Store = require('../models/stores');
const Worker = require('../models/workers');
const Spaces = require('../models/chat');
const Customer = require("../models/customers");



router.post("/create-space", async (req, res) => {
    try {
      const {admin, members, spaceName, chatPic, chatHead } = req.body;
  
      if (!spaceName || !members || !chatPic || !chatHead) {
        return res.status(422).json({ error: "Please fill all the fields." });
      }
      const userFound = await Store.findOne({ email: admin }) || await Worker.findOne({email : admin}) || await Customer.findOne({email : admin});
  
      const foundSpaces = await Spaces.find();
      const userName = userFound.admin || userFound.name;
      console.log(userName);
  
      // const saveSpaces = await userFound.EmbedSpaces(spaceName);
  
     
  
      const filteredMembers = members.filter((member) => {
        return member !== userName
      })
      
      console.log(filteredMembers);
      
  
      const userSpaces = foundSpaces.filter((userSpace) => {
        return ((userSpace.members[0] == userName || userSpace.members[1] == userName) && (filteredMembers[0] == userSpace.members[0] || filteredMembers[0] == userSpace.members[1]))
      })
  
      const count = userSpaces.length;
  
      if (userFound && count === 0) {
        const space = new Spaces({
          admin,
          members,
          spaceName,
          chatPic,
          chatHead
        });
        const createdSpace = await space.save();
        res.status(200).send(createdSpace);
      } 
      else {
        if(!userFound){
          res.status(404).json({message: "User Not Found!"});
        }else{
          res.status(404).json({message: "You are already connected to this user."});
        }
        
      }
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  });
  
  router.post("/get-users-spaces", async (req, res) => {
    try {
      const { name } = req.body;
  
      if (!name) {
        return res.status(422).json({ error: "Please fill all the fields." });
      }
  
      const Space = await Spaces.find();
  
      const SpaceFound = Space.map((elem) => {
        if (elem.members.includes(name)) {
          return elem;
        } else {
          return null;
        }
      });
  
      const filteredSpaceFound = SpaceFound.filter((elem) => {
        return elem !== null;
      });
  
      if (SpaceFound) {
        res.send(filteredSpaceFound);
      } else {
        res.json("You are not a part of any Space.");
      }
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  });

  router.post("/search-space", async (req, res) => {
    try {
      const { search,username } = req.body;
  
      if (!search) {
        return res.status(422).json({ error: "Please fill all the fields." });
      }
  
      const Space = await Spaces.find();
  
      const SpaceFound = Space.map((elem) => {
        if (elem.members.includes(username)) {
          return elem;
        } else {
          return null;
        }
      });
  
      const filteredSpaceFound = SpaceFound.filter((elem) => {
        return elem !== null;
      });
  
  
  
      const newSpaces = filteredSpaceFound.map((space) => {
        if (space.chatHead.toLowerCase()) {
          if (!space.chatHead.toLowerCase().search(search)) {
            return space;
          }
        }
      });
  
      const filteredNewSpaces = newSpaces.filter((space) => {
        return space != null
      })
  
      if (newSpaces) {
        res.send(filteredNewSpaces);
      }
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  });
  
  
  
  router.post("/send-message", async (req, res) => {
    try {
      const { id, username, message } = req.body;
  
      if (!username || !message) {
        return res.status(422).json({ error: "Please fill all the fields." });
      }
  
      const spaceFound = await Spaces.findOne({ _id: id });
  
      const spacename = spaceFound.spaceName;
  
      if (spaceFound) {
        const embedMessages = await spaceFound.PostMessages(
          username,
          message,
          spacename
        );
        return res.status(200).send(embedMessages);
      } else {
        return res.status(404).send(`Could not find requested Space.`);
      }
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  });

  module.exports = router;
  
  