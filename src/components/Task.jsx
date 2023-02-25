import React from "react";

import imgDelete from "../img/delete.svg";
import imgDone from "../img/done.svg";

import { deleteTask, doneTask } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const Task = (props) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(deleteTask(props.id));
  };

  const doneItem = () => {
    dispatch(doneTask(props.id));
  };

  return (
    <li
      id={props.id}
      className="flex items-center rounded-xl justify-between p-3 group bg-white"
    >
      <div className="flex space-x-2">
        <input
          onClick={doneItem}
          checked={props.done ? true : false}
          type="checkbox"
          name="checkbox"
          className="accent-cyan-400 mr-2 checkbox"
          id=""
        />
        <p>{props.text}</p>
      </div>

      <div id="3" className="flex gap-4">
        <button
          id="2.5"
          className="reduct-item flex items-center justify-center h-6 w-6 z-0"
        >
          <img
            src="../img/pencil.svg"
            id="1.5"
            className="group-hover:scale-100 bg-cyan-200 rounded-md scale-0 z-0 transition-all duration-200"
            alt=""
          />
        </button>
        <button
          id="2"
          className="delete-item flex items-center justify-center h-6 w-6 z-0"
          onClick={deleteItem}
        >
          <img
            src={imgDelete}
            id="1"
            className=" bg-cyan-200 rounded-md  z-0 transition-all duration-200"
            alt=""
          />
        </button>
      </div>
    </li>
  );
};

export default Task;
