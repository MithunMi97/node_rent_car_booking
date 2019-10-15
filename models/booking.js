const mongoose = require("mongoose");
const DateOnly=require("mongoose-dateonly")(mongoose);
const { ObjectId } = mongoose.Schema;

const BookingSchema = new mongoose.Schema(
    {
        vehiclenumber: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 32
        }, 
       
        date: {
            type: DateOnly,
            trim: true,
            required: true,
            maxlength: 32
        }, 
        dayscount: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 32
        },
        price:{
            type: Number,
            trim: true,
            required: true,
            maxlength: 32
        },
        availability: {
            required: false,
            type: Boolean
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Booking", BookingSchema);