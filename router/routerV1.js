const express = require('express');
const teamRouter = require('./team');

const routerV1 = express.Router();

routerV1.use('/team',teamRouter);


module.exports = routerV1;