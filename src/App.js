import React from "react";

import Task from "./components/Task";
import { useSelector, useDispatch } from "react-redux";

import { useRef, useState, useEffect } from "react";
import { reducer } from "./reducer";

import imgButton from "./img/button.svg";

import { addTask } from "./actions";

function App() {
  const store = useSelector((state) => state);
  const [taskStatusDisplay, setTaskStatusDisplay] = useState("Active Tasks");
  const [displayChangeStatus, setDisplayChangeStatus] = useState(false);
  const [taskNumbers, setTaskNumbers] = useState(0);
  const [isValid, setIsValid] = useState(true);
  const [validText, setValidText] = useState("");

  const toggleSelect = () => {
    if (displayChangeStatus === true) {
      setDisplayChangeStatus(false);
    } else {
      setDisplayChangeStatus(true);
    }
  };

  useEffect(() => {
    if (taskStatusDisplay === "Complete Tasks") {
      setTaskNumbers(
        store.filter((item) => {
          return item.done === true;
        }).length
      );
    }

    if (taskStatusDisplay === "Active Tasks") {
      setTaskNumbers(
        store.filter((item) => {
          return item.done === false;
        }).length
      );
    }
  }, [store, taskStatusDisplay]);

  const handlerStatusChange = (e) => {
    if (e === "completed") {
      setTaskStatusDisplay("Complete Tasks");
    }

    if (e === "active") {
      setTaskStatusDisplay("Active Tasks");
    }

    setDisplayChangeStatus(false);
  };

  const [inputText, setInputText] = useState("");

  const dispatch = useDispatch();

  const userRef = useRef();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const addItem = (e) => {
    e.preventDefault();

    if (inputText.trim() === "") {
      setIsValid(false);
      setValidText("Are you tying to submit an empty input? Try harder");
    } else if (inputText.trim().length > 20) {
      setIsValid(false);
      setValidText(
        `Sorry to tell you, but it isn't a blog. You'll be good using less than 20 characters`
      );
    } else {
      setIsValid(true);
      setTaskStatusDisplay("Active Tasks");
      handlerStatusChange("Active Tasks");
      dispatch(addTask(inputText.trim()));
      setInputText("");
    }
  };

  return (
    <main className="relative">
      <div className="py-5 h-screen">
        <section className="max-w-2xl max-h-[95vh] space-y-5 p-6 rounded-xl bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mx-auto flex flex-col py-5">
          <div className="overlay hidden"></div>

          <div className="flex justify-between items-center">
            <h1 className="font-bold text-3xl text-white">My ToDo List</h1>

            <div
              id="status"
              className="border-2 border-white px-6 py-3 rounded-xl text-white font-bold"
            >
              {taskStatusDisplay} {taskNumbers}
            </div>
          </div>

          <div className="flex items-center justify-between space-x-3 mb-8">
            <form
              id="task-form"
              className="flex justify-between items-center rounded-xl bg-white p-3 w-full space-x-3 group"
            >
              <input
                maxLength={21}
                type="text"
                name="task"
                id="task"
                ref={userRef}
                onChange={(e) => setInputText(e.target.value)}
                value={inputText}
                className="w-full"
                placeholder="You can always write your task here"
              />

              <button
                onClick={addItem}
                className="flex items-center justify-center h-6 w-6"
              >
                <img
                  src={imgButton}
                  className=" bg-cyan-200 rounded-md transition-all duration-200 active:bg-cyan-500 active:translate-y-0.5"
                  alt=""
                />
              </button>
            </form>

            <div>
              <button
                className="select px-6 py-3 rounded-xl text-white font-bold nav-link relative bg-cyan-400 hover:bg-cyan-300 hover:shadow-xl transition-all duration-300 flex items-center space-x-4 z-10"
                onClick={toggleSelect}
              >
                <p>Select</p>
                <div
                  className={`hamburger block cursor-pointer ${
                    displayChangeStatus ? "active" : ""
                  }`}
                >
                  <span className="bar block w-[25px] h-[2px] my-[3px] mx-auto transition-all duration-300 ease-in-out bg-white"></span>
                  <span className="bar block w-[25px] h-[2px] my-[3px] mx-auto transition-all duration-300 ease-in-out bg-white"></span>
                  <span className="bar block w-[25px] h-[2px] my-[3px] mx-auto transition-all duration-300 ease-in-out bg-white"></span>
                </div>
              </button>
              <div
                className={`dropdown-menu mt-5 absolute z-10 bg-cyan-400 px-2 py-4 rounded-xl shadow-xl scale-0 transition-all -translate-y-2 duration-100 ease-in text-white flex flex-col space-y-2 ${
                  displayChangeStatus ? "active" : ""
                } `}
                onMouseLeave={() => {
                  setDisplayChangeStatus(false);
                }}
              >
                <a
                  id="active"
                  href="#"
                  onClick={() => handlerStatusChange("active")}
                >
                  Active
                </a>
                <a
                  id="completed"
                  href="#"
                  onClick={() => handlerStatusChange("completed")}
                >
                  Completed
                </a>
              </div>
            </div>
          </div>
          <div
            className={`  ${
              isValid ? "hidden" : ""
            } text-red-100 px-2 py-1 rounded-md bg-black`}
          >
            {validText}
          </div>

          <ul className="collection flex flex-col rounded-xl space-y-3 overflow-y-auto pr-4 min-h-[20rem] p-3">
            {taskStatusDisplay === "Active Tasks"
              ? store.map((task, index) => {
                  if (task.done === false) {
                    return (
                      <Task
                        key={index}
                        id={task.id}
                        text={task.text}
                        done={task.done}
                      />
                    );
                  } else {
                    return;
                  }
                })
              : store.map((task, index) => {
                  if (task.done === true) {
                    return (
                      <Task
                        key={index}
                        id={task.id}
                        text={task.text}
                        done={task.done}
                      />
                    );
                  } else {
                    return;
                  }
                })}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default App;
