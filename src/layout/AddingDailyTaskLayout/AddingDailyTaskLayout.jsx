import AddTaskComponent from "../../components/AddTaskComponent/AddTaskComponent";
import "./AddingDailyTaskLayout.css";

const AddingDailyTaskLayout = () => {
  return (
    <div className="container">
      <div className="mt-2">
        <div className="card">
          <AddTaskComponent />
        </div>
      </div>
    </div>

  );
};

export default AddingDailyTaskLayout;
