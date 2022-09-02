const initialState = {
  list: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO_LIST":
      const data  = action.payload;
    //   console.log(data);
      return {
        ...state,
        list: [...state.list,data ],
    };

    // case "EDIT_TODO_LIST":
    //     return {
    //       list: [...state.list],
    //     };
    
    case "UPDATE_TODO_LIST":
        state.list[action.index]=action.value;
        return {
          list: [...state.list],
        };

    case "DELETE_TODO_LIST":
    //   const list = state.list.filter((o) => o.id !== action.id);
        state.list.splice(action.index, 1);
        console.log(state.list);
      return {
        list:[...state.list],
        console:console.log("state===>",state)
      };
      
    default:
      return state;
  }
};
export default todoReducer;
