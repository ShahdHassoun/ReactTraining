
import React, { useState } from "react";

const TasksList = ({ id, listTodoToday, listTodoTomorrow, listTodoUpcoming }) => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (event, item) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setCheckedItems([...checkedItems, item]);
    } else {
      setCheckedItems(checkedItems.filter((checkedItem) => checkedItem !== item));
    }
  };

  const isItemChecked = (item) => {
    return checkedItems.includes(item);
  };

  return (
    <div className="tasksList">
      {id === "1"
        ? listTodoToday.map((listItem, i) => (
            <div className="listItem" key={i}>
              <input
                type="checkbox"
                checked={isItemChecked(listItem)}
                onChange={(e) => handleCheckboxChange(e, listItem)}
              />
              <li style={{ textDecoration: isItemChecked(listItem) ? "line-through" : "none" }}>{listItem}</li>
            </div>
          ))
        : id === "2"
        ? listTodoTomorrow.map((listItem, i) => (
            <div className="listItem" key={i}>
              <input
                type="checkbox"
                checked={isItemChecked(listItem)}
                onChange={(e) => handleCheckboxChange(e, listItem)}
              />
              <li style={{ textDecoration: isItemChecked(listItem) ? "line-through" : "none" }}>{listItem}</li>
            </div>
          ))
        : id === "3"
        ? listTodoUpcoming.map((listItem, i) => (
            <div className="listItem" key={i}>
              <input
                type="checkbox"
                checked={isItemChecked(listItem)}
                onChange={(e) => handleCheckboxChange(e, listItem)}
              />
              <li style={{ textDecoration: isItemChecked(listItem) ? "line-through" : "none" }}>{listItem}</li>
            </div>
          ))
        : null}
    </div>
  );
};

export default TasksList;
