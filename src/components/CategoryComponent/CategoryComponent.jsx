import { useDispatch } from 'react-redux';
import './CategoryComponent.css';
import { defineCategory } from '../../store/dailyTaskSlice';

const CategoryComponent = () => {

    const dispatch = useDispatch();

    const allCategories = [
        'Task',
        'Routine',
        'Event',
        'Meeting',
        'Reminder',
    ]

    const handleDefineCategory = (categoryItem) => {
        dispatch(defineCategory(categoryItem));
        console.log(`Category Defined: ${categoryItem}`);
    }


    return (
        <div className="text-center container justify-content-center">
            <div id="category_title">
                <h5 >Select category</h5>
            </div>
            
            {allCategories.map((categoryItem, index) => (
            <button
                type="button"
                className="mx-2 my-2 category_button"
                key={index}
                onClick={() => handleDefineCategory(categoryItem)}
            >
                {categoryItem}
            </button>
            ))}
      </div>
);
}

export default CategoryComponent;