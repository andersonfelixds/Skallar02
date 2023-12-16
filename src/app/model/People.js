const mongoose = require("mongoose");

const PeopleSchema = new mongoose.Schema(
    {
        name: {
          type: String,
          required: true
        },
        height: {
            type: String,
            required: false
          },
        gender: {
          type: String,
          required: true
        }
      },
      {
        timestamps: true
      }

); 


module.exports = mongoose.model("people", PeopleSchema,"people");