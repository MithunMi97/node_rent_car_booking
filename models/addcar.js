const mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");

const AddcarSchema = new mongoose.Schema(
    {
        vehiclenumber: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 32
        }, 
        carmodel: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        seatingcapacity: {
            type:Number,
            required: true
        },
        rentperday: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 32
        }, 
        Bookingstatus: {
            required: false,
            type: Boolean
        }
    },
    { timestamps: true }
);

// virtual field

module.exports = mongoose.model("add", AddcarSchema);
