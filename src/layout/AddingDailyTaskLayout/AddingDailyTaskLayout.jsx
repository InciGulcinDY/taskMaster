import AddTaskComponent from "../../components/AddTaskComponent/AddTaskComponent";
import CategoryComponent from "../../components/CategoryComponent/CategoryComponent";
import SubjectComponent from "../../components/SubjectComponent/SubjectComponent";

const AddingDailyTaskLayout = () => {
  return (
    <div className="row">
      
      {/* Task Subjects */}
      <div className="daily-task-subjects col-sm-12 col-md-3 mt-4">
        <SubjectComponent />
      </div>

      {/* Task Input */}
      <div className="daily-task-input col-6">
        <AddTaskComponent />
      </div>

      {/* Task Types */}
      <div className="daily-task-types col-sm-12 col-md-3 mt-4">
        <CategoryComponent />
      </div>
    </div>
  );
};

export default AddingDailyTaskLayout;
