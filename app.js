const express = require("express");
const mongoose = require("mongoose");
const morgan=require("morgan")
const bodyParser=require("body-parser")
const cookieParser=require("cookie-parser")
require("dotenv").config();
// import routes
const addcarRoutes = require("./routes/addcar");
const bookingRoutes = require("./routes/booking");

// app
const app = express();

// db
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log("DB Connected"));
//middleware
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(cookieParser())
// routes middleware
app.use("/api", addcarRoutes);
app.use("/api", bookingRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
