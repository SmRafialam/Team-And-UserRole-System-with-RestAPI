const teamModel = require('./teamModel')

const add = async(team,req)=>{
  try{
    const team = new teamModel({
      name : req.body.name,
    });

    const createdTeam = await team.save();

    return {data: {createdTeam}, success: 'Team Added Successfully', status: 200}

  }
  catch(err){
    return {msg: err.message, status: 500}
  }
}

const getLists = async()=>{
  try{
    const teamLists = await teamModel.find({});
    return {data: [teamLists], status: 200}

  }
  catch(err){
    return {msg: err.message, status: 500}

  }
}

const getOne = async(teamID)=>{
  try{
    const team = await teamModel.findById(teamID)
    return {data: [team], status: 200}

  }
  catch(err){
    return {msg: err.message, status: 500}

  }
}

const editTeam = async()=>{
  try{

  }
  catch(err){
    
  }
}

const deleteOne = async()=>{
  try{

  }
  catch(err){
    
  }
}

module.exports = {
  add,
  getLists,
  getOne,
  editTeam,
  deleteOne
}

