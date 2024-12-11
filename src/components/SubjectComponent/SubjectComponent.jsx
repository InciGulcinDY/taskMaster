import React, { useState } from "react";
import { Dropdown, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { defineSubject } from "../../store/dailyTaskSlice";
import "./SubjectComponent.css";
import CustomMenu from "../../utils/customMenu";

const SubjectComponent = () => {
  const allSubjects = [
    "Personal",
    "Health",
    "School",
    "Business",
    "Home",
    "Homework",
    "Fitness",
    "Career",
    "Finances",
    "Relationships",
    "Travel",
    "Hobbies",
    "Shopping",
    "Volunteering",
    "Self-Care",
    "Cleaning",
    "Learning",
    "Meal Planning",
    "Social",
    "Entertainment",
  ];

  const dispatch = useDispatch();
  const subject = useSelector((state) => state.dailyTask.subject);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDefineSubject = (subjectItem) => {
    dispatch(defineSubject(subjectItem));
    setShowDropdown(false);
  };

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <div id="subject" className="subject-component">
      <Dropdown show={showDropdown} onToggle={(isOpen) => setShowDropdown(isOpen)}>
        <Form.Control
          type="text"
          placeholder="Type or select a subject"
          value={subject}
          onChange={(e) => dispatch(defineSubject(e.target.value))}
          onClick={toggleDropdown}
        />
        {/* Dropdown menu */}
        <Dropdown.Menu as={CustomMenu}>
          {allSubjects.map((subjectItem, index) => (
            <Dropdown.Item
              key={index}
              onClick={() => handleDefineSubject(subjectItem)}
            >
              {subjectItem}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default SubjectComponent;