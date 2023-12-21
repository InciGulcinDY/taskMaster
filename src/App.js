import logo from './logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';

function App() {
  const [task, setTask] = useState('');     //Defining task state, it initialized with an empty string ('') 
  const [tasks, setTasks] = useState([]);   //Defining task state array to collect all defined tasks

  //Handling addition the new task
  const handleAddTask = () => {
    if (task.trim() !== '') {               //Checking whether the task is empty or not
      setTasks([...tasks, task]);           //Adding new task to the array
      setTask('');                          //Cleaning the task
    }
  };

  //Handling deleting the task
  const handleDeleteTask = (index) => {     
    const updatedTasks = [...tasks];        //Defining new array to implement the current tasks after deleting
    updatedTasks.splice(index, 1);          //Removing task to be deleted from the tasks list
    setTasks(updatedTasks);                 //Seting tasks array
  };

  return (

    <div className='container-md'>
      <nav class="navbar bg-white mb-4 border-bottom border-4 border-warning">
        <div class="container-fluid">
          <div class="navbar-brand text-dark mx-auto">
            <img src={logo} className="App-logo" alt="logo"  width="500" height="auto" class="d-inline-block align-text-top"/>
            <div className='mx-auto text-center'>
              <h1>Task Master</h1>
            </div>
          </div>
        </div>
      </nav>

      <section>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Write the tas to be done" aria-label="To Do" aria-describedby="button-addon2" 
          value={task}
          onChange={(event) => setTask(event.target.value)}/>
          
          <button class="btn btn-outline-secondary btn-success text-light" type="button" id="button-addon2" 
          onClick={handleAddTask}>
            ADD
          </button>
        </div>

        <div>
          <p className='fs-3'>My Tasks</p>
          <ul class="list-group">
          {tasks.map((t, index) => (
            <li class="list-group-item d-flex justify-content-between align-items-center" key={index}>
            {t}
              <button type="button" class="btn-close" aria-label="Close" 
              onClick={() => handleDeleteTask(index)}></button>
            </li>
            ))} 
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
