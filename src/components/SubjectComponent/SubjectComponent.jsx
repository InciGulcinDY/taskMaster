import { useDispatch, useSelector } from "react-redux";
import { defineSubject } from "../../store/dailyTaskSlice";
import './SubjectComponent.css';

const SubjectComponent = () => {
    const allSubjects = [
      'Personal', 
      'Health', 
      'School', 
      'Business', 
      'Home', 
      'Homework', 
      'Fitness', 
      'Career', 
      'Finances', 
      'Relationships', 
      'Travel', 
      'Hobbies', 
      'Shopping', 
      'Volunteering', 
      'Self-Care', 
      'Cleaning', 
      'Learning', 
      'Meal Planning', 
      'Social', 
      'Entertainment'
    ];
  
    const dispatch = useDispatch();
  
    const handleDefineSubject = (subjectItem) => {
      dispatch(defineSubject(subjectItem));
      console.log(`Subject Defined: ${subjectItem}`);
    };
  
    return (
      <div className="text-center container">
        <h5 id="subject_title">Organize Your Task by Choosing a Subject</h5>
        {allSubjects.map((subjectItem, index) => (
          <button
            type="button"
            className="mx-2 my-2 subject_button"
            key={index}
            onClick={() => handleDefineSubject(subjectItem)}
          >
            {subjectItem}
          </button>
        ))}
      </div>
    );
  };
  
export default SubjectComponent;