import React from "react";
import { useRef, useState, useEffect } from "react";

import imgDelete from "../img/delete.svg";
import imgDone from "../img/done.svg";
import imgEdit from "../img/pencil.svg";

import { deleteTask, doneTask, editTask } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const Task = (props) => {
  const [inputText, setInputText] = useState(props.text);
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(deleteTask(props.id));
  };

  const doneItem = () => {
    dispatch(doneTask(props.id));
  };

  const editItem = () => {
    dispatch(editTask({ id: props.id, text: inputText }));

    setIsEdit(false);
  };

  const edit = () => {
    setIsEdit(true);
    const x = () => {
      userRef.current.focus();
    };
    const y = window.setTimeout(x, 300);
    x();
  };

  const userRef = useRef();

  const [isEdit, setIsEdit] = useState(false);

  return (
    <li
      id={props.id}
      className="flex items-center rounded-xl justify-between p-3 group bg-white"
    >
      <form className={` ${isEdit ? "" : "hidden"} flex space-x-2 w-full`}>
        <input
          ref={userRef}
          onChange={(e) => setInputText(e.target.value)}
          type="text"
          className="bg-slate-100 w-full px-2"
          defaultValue={props.text}
        />
        <button
          onClick={editItem}
          id="2.5"
          className="reduct-item flex items-center justify-center h-6 w-6 z-0"
        >
          <img
            src={imgDone}
            id="1.5"
            className="group-hover:scale-100 bg-cyan-200 rounded-md  z-0 transition-all duration-200"
            alt=""
          />
        </button>
      </form>
      <div className={`${isEdit ? "hidden" : ""} flex space-x-2`}>
        <input
          onClick={doneItem}
          checked={props.done ? true : false}
          type="checkbox"
          name="checkbox"
          className={`accent-cyan-400 mr-2 checkbox`}
          id=""
        />
        <p>{props.text}</p>
      </div>

      <div id="3" className={`${isEdit ? "hidden" : ""}  flex gap-4`}>
        <button
          id="2.5"
          className="reduct-item flex items-center justify-center h-6 w-6 z-0"
          onClick={edit}
        >
          <img
            src={imgEdit}
            id="1.5"
            className="group-hover:scale-100 bg-cyan-200 rounded-md  z-0 transition-all duration-200"
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
