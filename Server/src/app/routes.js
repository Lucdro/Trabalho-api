const routes=require('express').Router();
const taskController=require('./controllers/TaskController');

routes.get('/tasks', taskController.index);
routes.post('/tasks', taskController.create);
routes.delete('/tasks/:_id',taskController.delete);

module.exports = routes;