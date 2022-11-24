const teamModel = require('./teamModel')

const add = async(teamObj)=>{
  // console.log(teamObj)
  try{
    const team = new teamModel({
      name: teamObj.name
    });

    const createdTeam = await team.save();
    teamData = {
      id: createdTeam.id,
      name: createdTeam.name
    }
    return {data: {teamData}, success: 'Team Added Successfully', status: 200}

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
        name: team.name
      }
    })
    return {data: [modifiedTeamList], status: 200}

  }
  catch(err){
    return {msg: err.message, status: 500}

  }
}

const getOne = async(teamID)=>{
  try{
    const team = await teamModel.findById(teamID);

    // const modifiedUpdateTeamList = team.map(updateTeam=> {
    //   return {
    //     id: updateTeam.id,
    //     name: updateTeam.name
    //   }
    // })
    // console.log(modifiedUpdateTeamList)
    return {data: [team], status: 200}

  }
  catch(err){
    return {msg: err.message, status: 500}

  }
}

const editTeam = async(teamId,teamData)=>{
  try{
    // const result = await teamModel.findOne({name: teamData.name})
    //     if(result !== null) {
    //         if(result.id !== teamId) {
    //             throw Error(`${result.name} team is already exist`)
    //         }
    //     }
    const team = await teamModel.findByIdAndUpdate(teamId,{
     ...teamData
      
    })
    console.log(team);
    updateTeamData = {
      id: team.id,
      name: team.name
    }

    return {data: [updateTeamData], status: 200}
  }
  catch(err){
    return {msg: err.message, status: 500}

  }
}

const deleteOne = async(teamID)=>{
  try{
    const team = await teamModel.findByIdAndRemove(teamID)
    console.log(team + " - Removed succesfully");
    return {data: [team], status: 200}
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

