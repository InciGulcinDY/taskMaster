import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
} from "../../store/dailyTaskSlice";
import './AddTaskComponent.css';
import SubjectComponent from "../SubjectComponent/SubjectComponent";
import CategoryComponent from "../CategoryComponent/CategoryComponent";
import TimeSelection from "../TimeSelectionComponent/TimeSelectionComponent";

const AddTaskComponent = () => {
  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState("");
  const subject = useSelector((state) => state.dailyTask.subject);
  const category = useSelector((state) => state.dailyTask.category);
  const time = useSelector((state) => state.dailyTask.time);

  const handleAddTask = () => {
    if (!newTask.trim() || !subject.trim() || !category.trim()) {
      alert("Please fill in all fields!");
      return;
    }
    const task = { newTask, subject, category, time };
    dispatch(addTask(task));
    setNewTask("");
  };

  return (

      <div id="add_task_component" className="form-floating">
        <div className="row">
          {/* Titles */}
          <div className="daily-task-title col-12 text-center mb-2">
            <h3>Where Every Great Day Begins!</h3>
            <h5>Your day, your way.</h5>
          </div>
          <div className="col-12">
            <textarea
              className="form-control"
              placeholder="Enter your task"
              id="floatingTextarea"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            ></textarea>
          </div>
          <div className="col-6 mt-2">
            <SubjectComponent />              
          </div>
          <div className="col-6 mt-2">
            <CategoryComponent />
          </div>
          <div className="col-6 mt-2">
            <TimeSelection />
          </div>
        </div>
        <button className="add-button mt-2" onClick={handleAddTask}>
        ADD
      </button>
      </div>


  );
};

export default AddTaskComponent;
