const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const customerSchema = new mongoose.Schema({
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
  name: {
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
  address: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  profileImg : {
    type: String
  },
  coverImg : {
    type: String
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

customerSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    console.log(this.password);
  }
  next();
});

customerSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (e) {
    console.log(`Failed to generate token --> ${e}`);
  }
};

customerSchema.methods.deleteToken = async function (authToken) {
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


const Customer = mongoose.model("CUSTOMER", customerSchema);

module.exports = Customer;
