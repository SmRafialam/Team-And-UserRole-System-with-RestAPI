// getuser,getuserById,editOne,updateuser,deleteuser
const { addUser, getUserLists, getOneUser, editOneUser, deleteOneUser } = require("./userService")


const createUser = async(req,res)=>{
  const reqData = req.body;
//   console.log(reqData)
  const response = await addUser(reqData)
    
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

const getUser = async(req, res)=>{
  const response = await getUserLists()
    
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

const getUserById = async(req,res)=>{
  const response = await getOneUser(req.params.id)
    
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

const updateUser = async(req,res)=>{

    const response = await editOneUser( req.params.id, req.body )
    
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

const deleteUser = async(req,res)=>{
  const response = await deleteOneUser( req.params.id)
    
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
  createUser,
  getUser,
  getUserById,
  updateUser,
  deleteUser
}