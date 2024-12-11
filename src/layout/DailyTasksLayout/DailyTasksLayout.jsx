import { useSelector } from "react-redux";
import "./DailyTasksLayout.css";

const DailyTasksLayout = () => {
  const dailyTasks = useSelector((state) => state.dailyTask.dailyTasks);

  return (
    <div id="daily_tasks_layout" className="mt-2 card bg-white">
      <div className="text-center">
        <div className="table-container">
          <table id="daily_tasks_table">
            <thead id="daily_table_title">
              <tr>
                <th>Category</th>
                <th>Subject</th>
                <th>Task</th>
                <th>Time</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody id="daily_table_body">
              {Object.entries(
                dailyTasks.reduce((grouped, task) => {
                  const { category } = task;
                  if (!grouped[category]) {
                    grouped[category] = [];
                  }
                  grouped[category].push(task);
                  return grouped;
                }, {})
              ).map(([category, tasks]) =>
                tasks.map((task, index) => (
                  <tr key={task.subject + index}>
                    {index === 0 && <th rowSpan={tasks.length}>{category}</th>}
                    <td>{task.subject}</td>
                    <td>{task.newTask}</td>
                    <td>{task.time===null ? `-` : `${task.time}`}</td>
                    <td className="checkbox-cell">
                      <input type="checkbox" />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DailyTasksLayout;
