const Addcar = require("../models/addcar");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.addcar = (req, res) => {
   
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
    /*const Addcar = require("../models/addcar");

    exports.addcar = (req, res) => {
        console.log("req.body", req.body);
        const newcar = new Addcar(req.body);
        newcar.save((err, user) => {
            if (err) {
                return res.status(400).json({
                    error
                });
            }
            res.json({
                user
            });
        });
    };
    */