import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GT } from "../../redux/actionCreater";

export const TodoInput = () => {
  const [title, settitle] = useState("");
  // const todos = useSelector((state)=>state.todo)
  // console.log(todos);
  const dispacher = useDispatch();
  const handleChange = (e) => {
    settitle(e.target.value);
  };

  const handleClick = () => {
    axios
      .post("http://localhost:8080/todos", {
        id: Date.now(),
        title,
        isCom: false,
        isfev: false,
      })
      .then((res) => {
        axios.get("http://localhost:8080/todos").then((res) => {
          dispacher(GT(res.data));
          console.log(res.data);
        });
      });
  };

  return (
    <div className="d-flex justify-content-center">

      <div class="input-group mt-5 w-50 ">
        <input
          onChange={handleChange} 
          value={title}
          type="text"
          class="form-control"
          aria-describedby="button-addon2"
        />
        <button
          class="btn btn-outline-success"
          type="button"
          id="button-addon2"
          onClick={handleClick}
        >
          ADD TODO
        </button>
      </div>
    </div>
  );
};
