const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  teams: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'teamModel',
    default: []

  }




},{timelamps:true})

const userModel = mongoose.model('userModel',userSchema)
module.exports = userModel