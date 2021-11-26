const mongoose=require('../../database');
const taskSchema= new mongoose.Schema({
    taskInstruction:{type:String,required:true},
    taskLocation:{type:String, required:true},
    createdAT:{type:Date,default:Date.now}
});
const task=mongoose.model('task',taskSchema);
module.exports=task;
