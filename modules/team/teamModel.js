const mongoose = require('mongoose')

const teamSchema = mongoose.Schema({

  name: {
    type: String,
    required: true,
    trim: true,
  },
  users: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'userModel',
    default: []

  }



},{timelamps:true})

const teamModel = mongoose.model('teamModel',teamSchema)
module.exports = teamModel