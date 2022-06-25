import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { GT } from "../../redux/actionCreater";
import { Link } from "react-router-dom";

export const TodosList = () => {
  const todos = useSelector((state) => state.todo);
  // console.log(todos);
  const dispacher = useDispatch();

  const getTodos = () => {
    axios.get("http://localhost:8080/todos").then((res) => {
      dispacher(GT(res.data));
    });
  };

  const handleCheck = (item) => {
    axios
      .patch(`http://localhost:8080/todos/${item.id}`, { isCom: !item.isCom })
      .then((res) => {
        getTodos();
      });
  };

  const handledel = (item) => {
    axios.delete(`http://localhost:8080/todos/${item.id}`).then((res) => {
      getTodos();
    });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="container w-50">
      {todos.map((item) => {
        return (
          <div
            className={
              !item.isCom
                ? "bg-light  border my-2 p-2 d-flex justify-content-between align-items-center"
                : "bg-success  border my-2 p-2 d-flex justify-content-between align-items-center"
            }
            key={item.id}
          >
            <input
              type="checkbox"
              checked={item.isCom ? true : false}
              onChange={() => handleCheck(item)}
            />
            <h5>{item.title}</h5>
            <div>
              <Link to={`/todo/${item.id}`}>
                <button className="btn btn-primary mx-3">Edit</button>
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => handledel(item)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
