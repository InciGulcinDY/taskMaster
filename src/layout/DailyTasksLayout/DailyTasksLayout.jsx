import { useSelector } from "react-redux";
import "./DailyTasksLayout.css";

const DailyTasksLayout = () => {
  const dailyTasks = useSelector((state) => state.dailyTask.dailyTasks);

  return (
    <div className="text-center container mt-5">
      <div className="">
        <table id="daily_tasks_table">
          <thead id="daily_table_title">
            <tr>
              <th>Subject</th>
              <th>Task</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody id="daily_table_body">
            {dailyTasks.map((task, index) => (
              <tr key={index}>
                <td>{task.subject}</td>
                <td>{task.newTask}</td>
                <td className="checkbox-cell">
                  <input type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>


      </div>
    </div>
  );
};

export default DailyTasksLayout;
