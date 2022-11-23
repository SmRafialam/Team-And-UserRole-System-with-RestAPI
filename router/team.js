const express = require('express');

const teamRouter = express.Router();
const {getTeam,createTeam,getTeamById,updateTeam,deleteTeam} = require('../modules/team/teamController');

teamRouter.get('/',getTeam);
teamRouter.post('/add',createTeam);
teamRouter.get('/get/:id', getTeamById);
teamRouter.put('/edit/:id',updateTeam);
teamRouter.delete('/delete/:id',deleteTeam);


module.exports = teamRouter;