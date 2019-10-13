const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const addcarSchema = new mongoose.Schema(
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

module.exports = mongoose.model("addcar", addcarSchema);