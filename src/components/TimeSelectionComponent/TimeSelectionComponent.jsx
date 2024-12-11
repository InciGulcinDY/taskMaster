import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { defineTime } from "../../store/dailyTaskSlice";
import DatePicker from "react-multi-date-picker"
import TimePicker from "react-multi-date-picker/plugins/time_picker"
import './TimeSelectionComponent.css'

const TimeSelection = () => {
  const dispatch = useDispatch();
  const time = useSelector((state) => state.dailyTask.time);

  const handleTimeChange = (time) => {
    if (time) {
      const formattedTime = time.format("HH:mm"); // Ensure newTime is not null
      dispatch(defineTime(formattedTime));
      console.log(`Time defined as: ${formattedTime}`);
    } else {
      console.log("Time is cleared");
      dispatch(defineTime(null)); // Handle clearing the time
    }
  };

  return (
    <div id="time_selection">
      <DatePicker
        id="time_picker"
        disableDayPicker
        value={time ? new Date(`1970-01-01T${time}:00`) : null}
        onChange={handleTimeChange}
        format="hh:mm A"
        placeholder="hh:mm"
        plugins={[<TimePicker position="bottom" hideSeconds />]}
      />
    </div>
  );
};

export default TimeSelection;
