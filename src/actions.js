export const ADD = "ADD";
export const DELETE = "DELETE";
export const DONE = "DONE";

export const addTask = (value) => ({
  type: ADD,
  payload: { text: value },
});
export const deleteTask = (value) => ({
  type: DELETE,
  payload: { id: value },
});
export const doneTask = (value) => ({ type: DONE, payload: { doneId: value } });
