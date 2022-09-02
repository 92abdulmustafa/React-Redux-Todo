export const addItem = (data) => {
  return {
    type: "ADD_TODO_LIST",
    payload: 
    //   id: new Date().getTime().toString(),
      data
  };
};
// export const editItem = (index) => {
//   return {
//     type: "EDIT_TODO_LIST",
//     index,
//   };
// };
export const updateItem = (index,value) => {
  return {
    type: "UPDATE_TODO_LIST",
    index,
    value
  };
};
export const deleteItem = (index) => {
  console.log("index ===>", index);
  return {
    type: "DELETE_TODO_LIST",
    index,
  };
};
