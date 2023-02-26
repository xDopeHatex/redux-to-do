export const ADD = "ADD";
export const DELETE = "DELETE";
export const DONE = "DONE";
export const EDIT = "EDIT";

export const addTask = (value) => ({
  type: ADD,
  payload: { text: value },
});
export const deleteTask = (value) => ({
  type: DELETE,
  payload: { id: value },
});
export const doneTask = (value) => ({ type: DONE, payload: { doneId: value } });

export const editTask = (value) => ({
  type: EDIT,
  payload: { id: value.id, text: value.text },
});
