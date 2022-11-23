const mongoose = require('mongoose')

const teamSchema = mongoose.Schema({

  name: {
    type: String,
    required: true,
    trim: true

  }



},{timelamps:true})

const teamModel = mongoose.model('teamModel',teamSchema)
module.exports = teamModel