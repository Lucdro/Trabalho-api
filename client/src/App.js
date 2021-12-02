import './App.css';
import {useState,useEffect} from 'react';
//import './script';
function App() {
  const [users , setUsers]=useState([]);
  const [taskInstruction,settaskInstruction]=useState('');
  const [taskLocation,settaskLocation]=useState('');
  useEffect(()=>{
    fetch('http://localhost:3001/tasks')
       .then(res=>res.json())
       .then(data=>setUsers(data));
  },[])
  function addTask(){
    fetch('http://localhost:3001/tasks',{
      method:"POST",
      body:JSON.stringify({taskInstruction,taskLocation}),
      headers : new Headers({
        'Content-Type':'application/json',
        'Accept':'application/json'
      })
    })
    .then(res=>res.json())
    .then(data=> setUsers([...users,data]))
    .then(settaskLocation(''),settaskInstruction(''))
  }
  function deleteTask(e){
    fetch(`http://localhost:3001/tasks/${e}`,{
      method:"DELETE"}).then(window.location.reload())
  }  
  function updateTask(e){
    fetch(`http://localhost:3001/tasks/${e}`,{
      method:"PUT",
      body:JSON.stringify({taskInstruction,taskLocation}),
      headers : new Headers({
        'Content-Type':'application/json',
        'Accept':'application/json'
      })
    })
    .then(settaskLocation(''),settaskInstruction(''))
    .then(window.location.reload())
  }
  return (
    <div className="flex-wrapper">
      <header>
        <div className="title">Anotar</div>
        <div className="formulary">
          <input placeholder='Pedido' onChange={e=>settaskInstruction(e.target.value)} value={taskInstruction}/>
          <input placeholder='Local' onChange={e=>settaskLocation(e.target.value)} value={taskLocation}/>
        </div>
        <div onClick={addTask} className="add-task">+</div>
      </header>
      <main>
        <ul className="task-list">
          {
            users.map(user=>{return(
             <div className="tasks">
              <li className="task">
                <div className="taskInstruction" >{user.taskInstruction}</div>
                <div className="taskLocation">{user.taskLocation}</div>
              </li>
              <div className="buttons">
                <div onClick= {()=>deleteTask(user._id)} className="delete" key={user._id}>Deletar</div>
                <div onClick={()=>updateTask(user._id)} className="update" key={user._id}>Atualizar</div>
              </div>
             </div>
            )
            })
          }
        </ul>
      </main>
      <footer>Conclua as tarefas</footer>
    </div>
  );
}

export default App;
