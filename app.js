const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express()
dotenv.config()

// database connection
mongoose.connect(process.env.DB_URl, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> {
    console.log('Database connected successfully');
    app.listen(process.env.PORT || 6000, () => {
        console.log(`Server is currently 🏃 on port ${process.env.PORT}`)
    })
})
.catch(err=> {
    console.log(err)
})
