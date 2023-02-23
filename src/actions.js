export const ADD = "ADD";
export const DELETE = "DELETE";
export const DONE = "DONE";

export const addTask = (value) => ({
  type: ADD,
  payload: { id: value.id, text: value.text },
});
export const deleteTask = (value) => ({ type: DELETE, payload: value.id });
export const doneTask = (value) => ({ type: DONE, payload: value.done });
