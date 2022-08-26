const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const workerSchema = new mongoose.Schema({
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
  profession: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  phone: 
    {
      type: Number,
      required: true,
    },

    orders : [
      {
      name : {
        type: String,
        required: true,
      },
      // phone : {
      //   type: Number,
      //   required: true,
      // },
      email : {
        type: String,
        required: true,
      },
      address : {
        type: String,
        required: true,
      },
    },
  ],
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

workerSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    console.log(this.password);
  }
  next();
});

workerSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (e) {
    console.log(`Failed to generate token --> ${e}`);
  }
};

workerSchema.methods.createOrder = async function (name,email,address) {
  try {
    this.orders = this.orders.concat({ name : name, email : email, address : address});
    await this.save();
    return this.orders;
  } catch (e) {
    console.log(`Failed to create order --> ${e}`);
  }
};

workerSchema.methods.deleteToken = async function (authToken) {
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


const Worker = mongoose.model("WORKER", workerSchema);

module.exports = Worker;
