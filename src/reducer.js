import { DELETE, ADD, DONE } from "./actions";

export const initialState = [{ id: 1, text: "fuck you", done: false }];

export const reducer = (state = initialState, action) => {
  if (action.type === ADD) {
    return [...state, action.payload];
  }

  if (action.type === DELETE) {
    return [...state, action.payload];
  }

  if (action.type === DONE) {
    return [...state, action.payload];
  }

  return state;
};
