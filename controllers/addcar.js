const Addcar = require("../models/addcar");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
    console.log(req.url);
    console.log("Hi test");
    const newCar = new Addcar(req.body);
   
    newCar.save((err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(result);
        });
    };
