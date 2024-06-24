const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const postRoutes = require('./routes/post')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())


app.use(postRoutes)

const mongoURI = "mongodb+srv://shubham21:shubham21@cluster0.sisho0d.mongodb.net/shops";

mongoose.connect(mongoURI, {
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(8000, () => {
        console.log("Server is running on port 8000");
    });
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});
