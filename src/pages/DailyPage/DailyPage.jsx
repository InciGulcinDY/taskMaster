import AddingDailyTaskLayout from "../../layout/AddingDailyTaskLayout/AddingDailyTaskLayout";
import DailyTasksLayout from "../../layout/DailyTasksLayout/DailyTasksLayout";
import './DailyPage.css'


function DailyPage() {

    return (
  
      <div id="daily_page" className='container-fluid'>
        <div id="task-design" className="row">
          <div className="col-sm-12 col-md-4">
            <AddingDailyTaskLayout />
          </div>
          <div className="col-sm-12 col-md-8">
            <DailyTasksLayout />
          </div>  
        </div>        
      </div>
    );
  }
  
  export default DailyPage;