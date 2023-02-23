import React from "react";

import Task from "./components/Task";

import imgButton from "./img/button.svg";
import imgDelete from "./img/delete.svg";
import imgDone from "./img/done.svg";

function App() {
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
              Active Tasks 0
            </div>
          </div>

          <div className="flex items-center justify-between space-x-3 mb-8">
            <form
              id="task-form"
              className="flex justify-between items-center rounded-xl bg-white p-3 w-full space-x-3 group"
            >
              <input
                type="text"
                name="task"
                id="task"
                className="w-full"
                placeholder="You can always write your task here"
              />
              <button
                type="submit"
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
              <button className="select px-6 py-3 rounded-xl text-white font-bold nav-link relative bg-cyan-400 hover:bg-cyan-300 hover:shadow-xl transition-all duration-300 flex items-center space-x-4 z-10 active:translate-y-0.5 active:bg-cyan-500">
                Add
                <div className="hamburger block cursor-pointer hidden">
                  <span className="bar block w-[25px] h-[2px] my-[3px] mx-auto transition-all duration-300 ease-in-out bg-white"></span>
                  <span className="bar block w-[25px] h-[2px] my-[3px] mx-auto transition-all duration-300 ease-in-out bg-white"></span>
                  <span className="bar block w-[25px] h-[2px] my-[3px] mx-auto transition-all duration-300 ease-in-out bg-white"></span>
                </div>
              </button>
              <div className="dropdown-menu mt-5 absolute z-10 bg-cyan-400 px-2 py-4 rounded-xl shadow-xl scale-0 transition-all -translate-y-2 duration-100 ease-in text-white flex flex-col space-y-2">
                <a id="active" href="#">
                  Active
                </a>
                <a id="completed" href="#">
                  Completed
                </a>
                <a id="deleted" href="#">
                  Deleted
                </a>
              </div>
            </div>
          </div>

          <ul className="collection flex flex-col rounded-xl space-y-3 overflow-y-auto pr-4 min-h-[20rem] p-3">
            <Task />
          </ul>
        </section>
      </div>
    </main>
  );
}

export default App;
