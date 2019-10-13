const addcar = require("../models/addcar");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
    const addcar=new addcar(req.body)
        addcar.save((err, result) => {
            if (err) {
                return res.staus(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(result);
        });
};
