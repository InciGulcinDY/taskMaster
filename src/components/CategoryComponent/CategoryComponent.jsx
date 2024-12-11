import { useDispatch, useSelector } from 'react-redux';
import './CategoryComponent.css';
import { defineCategory } from '../../store/dailyTaskSlice';
import { useState } from 'react';
import { Dropdown, Form } from 'react-bootstrap';

const CategoryComponent = () => {

    const dispatch = useDispatch();

    const allCategories = [
        'Goals',
        'Task',
        'Routine',
        'Event',
        'Meeting',
        'Reminder',
        'Notes',
    ]

    const category = useSelector((state) => state.dailyTask.category);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDefineCategory = (categoryItem) => {
        dispatch(defineCategory(categoryItem));
    }

    const toggleDropdown = () => setShowDropdown(!showDropdown);

    return (
        <div id="category" className="category-component">
        <Dropdown show={showDropdown} onToggle={(isOpen) => setShowDropdown(isOpen)}>
          <Form.Control
            type="text"
            placeholder="Select a category"
            value={category}
            onClick={toggleDropdown} 
          />
          {/* Dropdown menu */}
          <Dropdown.Menu>
            {allCategories.map((categoryItem, index) => (
              <Dropdown.Item
                key={index}
                onClick={() => handleDefineCategory(categoryItem)}
              >
                {categoryItem}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
);
}

export default CategoryComponent;