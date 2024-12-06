import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  defineCategory,
  defineSubject,
} from "../../store/dailyTaskSlice";
import './AddTaskComponent.css';

const AddTaskComponent = () => {
  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState("");

  const subject = useSelector((state) => state.dailyTask.subject);
  const category = useSelector((state) => state.dailyTask.category);

  const handleAddTask = () => {
    if (!newTask.trim() || !subject.trim() || !category.trim()) {
      alert("Please fill in all fields!");
      return;
    }
    const task = { newTask, subject, category };
    dispatch(addTask(task));
    setNewTask("");
  };

  return (
    <>
      <div className="form-floating">
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
            <div className="col-auto">
              <label className="visually-hidden">Subject</label>
              <input
                type="text"
                className="form-control"
                id="autoSizingInput"
                placeholder="Subject"
                value={subject}
                onChange={(e) => dispatch(defineSubject(e.target.value))}
              />
            </div>
          </div>
          <div className="col-6 mt-2">
            <label className="visually-hidden">Category</label>
            <input
              type="text"
              className="form-control"
              id="autoSizingInput"
              placeholder="Category"
              value={category}
              onChange={(e) => dispatch(defineCategory(e.target.value))}
            />
          </div>
        </div>
      </div>
      <button className="add-button mt-2" onClick={handleAddTask}>
        ADD
      </button>
    </>
  );
};

export default AddTaskComponent;
