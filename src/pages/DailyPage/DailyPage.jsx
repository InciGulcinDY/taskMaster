import AddingDailyTaskLayout from "../../layout/AddingDailyTaskLayout/AddingDailyTaskLayout";
import DailyTasksLayout from "../../layout/DailyTasksLayout/DailyTasksLayout";


function DailyPage() {


    return (
  
      <div className='container-fluid'>
        <div id="task-design" className="row mt-3">
          <div className="col-12">
            <AddingDailyTaskLayout />
          </div>
          <div className="container">
            <DailyTasksLayout />
          </div>  
        </div>        
      </div>
    );
  }
  
  export default DailyPage;