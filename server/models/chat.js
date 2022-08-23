const mongoose = require("mongoose");

const spacesSchema = new mongoose.Schema({
  admin: {
    type: String,
    required: true,
  },
  spaceName: {
    type: String,
    required: true
  },
  members: [
    {
      type: String,
      required: true,
    },
  ],
  chatHead : {
    type : String,
    required : true
  },
  chatPic : {
    type : String
  },
  messages: [
    {
      message: {
        type: String,
      },
      username: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
      spacename: {
        type: String,
      },
    },
  ],
});


spacesSchema.methods.PostMessages = async function (
  username,
  message,
  spacename
) {
  try {
    this.messages = this.messages.concat({
      username: username,
      message: message,
      spacename: spacename,
    });
    await this.save();
    return this.messages;
  } catch (e) {
    console.log(`Failed to Send Message. ${e}`);
  }
};
const Spaces = mongoose.model("Chat", spacesSchema);

module.exports = Spaces;