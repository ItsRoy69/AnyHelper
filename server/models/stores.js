const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const storeSchema = new mongoose.Schema({
  latitude : {
    type: Number,
    required: true,
    trim: true,
  },
  longitude : {
    type: Number,
    required: true,
    trim: true,
  },
  admin: {
    type: String,
    required: true,
    trim: true,

  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email.");
      }
    },
  },
  stype: {
    type: String,
    required: true,
    trim: true,
  },
  sname: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  items : [
    {
    type: String,
    required: true,
    trim: true,
    }
  ],
  address: 
    {
      type: String,
      required: true,
    },
    walletAddress: 
      {
        type: String,
        required: true,
      },
  tokens: [
    {
      token: {
        type: String,
        required: false,
      },
    },
  ],
});

// Hashing Passwords

storeSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    console.log(this.password);
  }
  next();
});

storeSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (e) {
    console.log(`Failed to generate token --> ${e}`);
  }
};

storeSchema.methods.deleteToken = async function (authToken) {
  try {
    this.tokens = this.tokens.filter((currElem) => {
    return currElem.token !== authToken;
    });
    await this.save();
    return authToken;
  } catch (e) {
    console.log(`Failed to delete token --> ${e}`);
  }
};

storeSchema.methods.deleteItems = async function (deleteItem) {
  try {
    this.items = this.items.filter((currElem) => {
    return currElem !== deleteItem;
    });
    await this.save();
    return deleteItem;
  } catch (e) {
    console.log(`Failed to delete item --> ${e}`);
  }
};


const Store = mongoose.model("STORE", storeSchema);

module.exports = Store;
