import { DELETE, ADD, DONE } from "./actions";

export const initialState = [];

function getRandomInt() {
  return Math.floor(Math.random() * 100000000);
}

export const reducer = (state = initialState, action) => {
  if (action.type === ADD) {
    return [
      ...state,
      { text: action.payload.text, id: getRandomInt(), done: false },
    ];
  }

  if (action.type === DELETE) {
    return state.filter((task) => task.id !== action.payload.id);
  }

  if (action.type === DONE) {
    return state.map((task) => {
      if (task.id === action.payload.doneId) {
        return { ...task, done: true };
      } else return { ...task };
    });
  }

  return state;
};
