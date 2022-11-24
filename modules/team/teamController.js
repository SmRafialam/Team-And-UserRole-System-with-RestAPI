// getTeam,getTeamById,editOne,updateTeam,deleteTeam
const { add, getLists, getOne, editTeam, deleteOne } = require("./teamService")


const createTeam = async(req,res)=>{
  const reqData = req.body;
//   console.log(reqData)
  const response = await add(reqData)
    
    if(response.status === 200 ) {
        res.json(response)
    }else {
        res.status(response.status).json({
            errors: {
                common: response
            }
        })
    }
}

const getTeam = async(req, res)=>{
  const response = await getLists()
    
    if(response.status === 200 ) {
        res.json(response)
    }else {
        res.status(response.status).json({
            errors: {
                common: response
            }
        })
    }
}

const getTeamById = async(req,res)=>{
  const response = await getOne(req.params.id)
    
    if(response.status === 200 ) {
        res.json(response)
    }else {
        res.status(response.status).json({
            errors: {
                common: response
            }
        })
    }
}

const updateTeam = async(req,res)=>{

    const response = await editTeam( req.params.id, req.body )
    
    if(response.status === 200 ) {
        res.json(response)
    }else {
        res.status(response.status).json({
            errors: {
                common: response
            }
        })
    }
}

const deleteTeam = async(req,res)=>{
  const response = await deleteOne( req.params.id)
    
    if(response.status === 200 ) {
        res.json(response)
    }else {
        res.status(response.status).json({
            errors: {
                common: response
            }
        })
    }
}

module.exports = {
  createTeam,
  getTeam,
  getTeamById,
  updateTeam,
  deleteTeam
}