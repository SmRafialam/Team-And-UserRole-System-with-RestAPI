const teamModel = require('./teamModel');
const userModel = require('../user/userModel')


const add = async(teamObj)=>{
  // console.log(teamObj)
  try{
    const team = new teamModel({
      name: teamObj.name,
      users: [teamObj.users]
    });

    const createdTeam = await team.save();

    teamData = {
      id: createdTeam.id,
      name: createdTeam.name,
    }
    return {data: teamData, success: 'Team Added Successfully', status: 200}

  }
  catch(err){
    return {msg: err.message, status: 500}
  }
}

const getLists = async()=>{
  try{
    const teamLists = await teamModel.find();
    const modifiedTeamList = teamLists.map(team=> {
      return {
        id: team.id,
        name: team.name,
        users: team.users
      }
    })
    return {data: modifiedTeamList, status: 200}

  }
  catch(err){
    return {msg: err.message, status: 500}

  }
}

const getOne = async(teamId)=>{
  try{
    const team = await teamModel.findById(teamId);

    // const modifiedUpdateTeamList = team.map(updateTeam=> {
    //   return {
    //     id: updateTeam.id,
    //     name: updateTeam.name,
    //     users: [updateTeam.users]
    //   }
    // })
    // console.log(modifiedUpdateTeamList)
    return {data: team, status: 200}

  }
  catch(err){
    return {msg: err.message, status: 500}

  }
}

const editTeam = async(teamId,teamData)=>{
  try{
    
    const team = await teamModel.findByIdAndUpdate(teamId,{
     ...teamData
      
    })
    console.log(team);
    updateTeamData = {
      id: team.id,
      name: team.name,
      users: [team.users]
    }

    return {data: updateTeamData, status: 200}
  }
  catch(err){
    return {msg: err.message, status: 500}

  }
}

const deleteOne = async(teamId)=>{
  try{
    const team = await teamModel.findByIdAndRemove(teamId)
    console.log(team + " - Removed succesfully");
    return {data: team, status: 200}
  }
  catch(err){
    return {msg: err.message, status: 500}

  }
}

module.exports = {
  add,
  getLists,
  getOne,
  editTeam,
  deleteOne
}

