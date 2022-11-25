const userModel = require('./userModel')

const addUser = async(UserObj)=>{
  console.log(UserObj)
  try{
    const User = new userModel({
      ...UserObj    
    });

    const createdUser = await User.save();

    UserData = {
      id: createdUser.id,
      firstName: createdUser.firstName,
      lastName: createdUser.lastName,
      email: createdUser.email,
      password: createdUser.password,
      teams: [createdUser.teams]

    }
    return {data: {UserData}, success: 'User Added Successfully', status: 200}

  }
  catch(err){
    return {msg: err.message, status: 500}
  }
}

const getUserLists = async()=>{
  try{
    const UserLists = await userModel.find();
    const modifiedUserList = UserLists.map(User=> {
      return {
        id: User.id,
        firstName: User.firstName,
        lastName: User.lastName,
        email: User.email,
        password: User.password,
        teams: [User.teams]
      }
    })
    return {data: [modifiedUserList], status: 200}

  }
  catch(err){
    return {msg: err.message, status: 500}

  }
}

const getOneUser = async(UserID)=>{
  try{
    const User = await userModel.findById(UserID);

    // const modifiedUpdateUserList = User.map(updateUser=> {
    //   return {
    //     id: updateUser.id,
    //     name: updateUser.name
    //   }
    // })
    // console.log(modifiedUpdateUserList)
    return {data: [User], status: 200}

  }
  catch(err){
    return {msg: err.message, status: 500}

  }
}

const editOneUser = async(UserId,UserData)=>{
  try{
  
    const User = await userModel.findByIdAndUpdate(UserId,{
     ...UserData
      
    })
    console.log(User);
    updateUserData = {
      id: User.id,
      name: User.name
    }

    return {data: [updateUserData], status: 200}
  }
  catch(err){
    return {msg: err.message, status: 500}

  }
}

const deleteOneUser = async(UserID)=>{
  try{
    const User = await userModel.findByIdAndRemove(UserID)
    console.log(User + " - Removed succesfully");
    return {data: [User], status: 200}
  }
  catch(err){
    return {msg: err.message, status: 500}

  }
}

module.exports = {
  addUser,
  getUserLists,
  getOneUser,
  editOneUser,
  deleteOneUser
}

