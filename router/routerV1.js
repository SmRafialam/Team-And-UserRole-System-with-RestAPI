const express = require('express');
const teamRouter = require('./team');
const userRouter = require('./user');

const routerV1 = express.Router();

routerV1.use('/team',teamRouter);
routerV1.use('/user',userRouter);


module.exports = routerV1;