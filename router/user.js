const express = require('express');

const userRouter = express.Router();
const {getUser,createUser,getUserById,updateUser,deleteUser} = require('../modules/user/userController');

userRouter.get('/',getUser);
userRouter.post('/add',createUser);
userRouter.get('/get/:id', getUserById);
userRouter.put('/edit/:id',updateUser);
userRouter.delete('/delete/:id',deleteUser);


module.exports = userRouter;