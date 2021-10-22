import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

const ADD = "ADD";
const DELETE = "DELETE";

// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

const reducer = createReducer([], {
  /*createReducer를 이용하여 state를 mutate한다.
  아래의 addToDo는 state를 return하지 않고 mutate한다
  */
  [addToDo]: (state, action) => {
    //reducer의 비어있는 array에 새로운 toDo를 push한다. push는 아무것도 return하지 않으며 state를 mutate한다.
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
});

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
