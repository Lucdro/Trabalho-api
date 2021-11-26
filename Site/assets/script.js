let taskListArr=[]

function createTask(taskitem){
const tasklist = document.querySelector(`.task-list`);
const newTask = document.createElement(`li`);
newTask.className = 'task';
newTask.id = taskitem.taskId
newTask.innerHTML = `<div class="task-instruction">${taskitem.taskInstruction}</div><div class="task-location">${taskitem.taskLocation}</div>`;
newTask.addEventListener('click', (e)=>{
  if (confirm('Deseja apagar?')){
    e.currentTarget.remove();
  }
});
tasklist.appendChild(newTask);
}
function addTaskItem(taskInstruction,taskLocation){
  const ids = taskListArr.map(task=>task.taskId);
  const taskId = ids.length > 0 ? Math.max(...ids)+1:1;
  const taskItem = {taskId , taskInstruction, taskLocation};
  taskListArr.push(taskItem)
  createTask(taskItem);
}

document.querySelector(".add-task").addEventListener(`click` , (e) => {
  const taskInstruction = prompt('Pedido:');
  if (taskInstruction !== null && taskInstruction !==''){
    const taskLocation = prompt('Para onde?');
    if (taskLocation !== null && taskLocation !==''){
      addTaskItem(taskInstruction,taskLocation)
    }
  }
})
