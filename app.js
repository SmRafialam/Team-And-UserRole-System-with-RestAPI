const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const app = express()
dotenv.config()

const routerV1 = require('./router/routerV1');

//middleware
const { notFoundHandler, errorHandler } = require('./middleware/common/errorHandler');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); 

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

//router
app.get('/',(req,res)=>{
  res.json({message:'okay'})
});

app.use('/api/v1',routerV1);

//not found handler
app.use(notFoundHandler);

//error handler
app.use(errorHandler);
