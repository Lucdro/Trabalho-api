const task = require('../models/task');

class taskController{
    async create(req,res){
        const {taskInstruction, taskLocation } = req.body;

        try{
            const createdtask = await task.create({taskInstruction, taskLocation });
            
            return res.status(200).json(createdtask);
        }catch(err){
            return res.status(400).json(err);}
    }
    async index(req,res){
        try{
            const tasks = await task.find();
            return res.status(200).json(tasks);
        }catch(err){
            return res.status(400).json(err);
        }
    }
    async delete(req,res){
        const { _id } = req.params;

        try{
            const deleted = await task.deleteOne({ _id });
            return res.status(200).json(deleted);
        }catch(err){
            return res.status(400).json(err);
        }

    }
    async update(req,res){
        const { _id } = req.params
        try{
            const updated = await task.update({ _id },req.body);
            return res.status(200).json(updated);
        }catch(err){
            return res.status(400).json(err);
        }

    }
}
module.exports = new taskController();