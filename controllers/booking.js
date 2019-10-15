const Booking = require("../models/booking");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
   
    const newbooking = new Booking(req.body);
   
    newbooking.save((err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(result);
        });
    };
