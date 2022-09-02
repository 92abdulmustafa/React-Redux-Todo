import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItem, deleteItem } from "../actions/index";

const Todo = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => {
    return state.todoReducer.list;
  });

  const [input, setInput] = useState("");
  const [index ,setIndex]=useState(null)
  const checkIndex = index!==null;

  return (
    <>
      <div className="grid place-items-center align-middle">
        <h1 className="py-5 text-2xl font-bold ">Todo App</h1>
        <hr />
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (checkIndex) {
              dispatch(updateItem(index, input));
            } else {
              dispatch(addItem(input));
              setInput("");
            }
          }}
        >
          <div className="mt-5 space-x-2">
            <input
              type="text"
              placeholder="Add Item"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              className="w-80 h-12 border border-neutral-500 rounded-md text-center"
            />
            <i
              className={`fa-solid ${
                checkIndex ? "fa-square-check" : "fa-plus"
              } mt-4 mr-3`}
              title={checkIndex ? "Update Todo Item" : "Add Todo Item"}
              onClick={() => {
                checkIndex
                  ? dispatch(updateItem(index, input))
                  : dispatch(addItem(input)) 
                setInput("");
              }}
            ></i>
          </div>
        </form>
        <div>
          {todoList.length
            ? todoList.map((v, i) => {
                return (
                  <div
                    key={i}
                    className="mt-8 flex space-x-5 place-items-center align-middle justify-center shadow-lg shadow-slate-600 drop-shadow-md border-gray-500 rounded-md w-80 h-14"
                  >
                    <p>{v}</p>
                    <i
                      className="fa-solid fa-edit text-xs"
                      title="Edit Todo Item"
                      onClick={() => {
                        setIndex(i);
                        setInput(v);
                      }}
                    ></i>
                    <i
                      className="fa-solid fa-trash-alt text-xs"
                      title="Delete Todo Item"
                      onClick={() => dispatch(deleteItem(i))}
                    ></i>
                  </div>
                );
              })
            : "Please enter todo list"}
        </div>
      </div>
    </>
  );
};

export default Todo;
