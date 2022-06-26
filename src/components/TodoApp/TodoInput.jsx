import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GTR, GTS, GTF, ATR, ATF, ATS } from "../../redux/actionCreater";

export const TodoInput = () => {
  const [title, settitle] = useState("");
  const dispacher = useDispatch();
  const isAddLoad = useSelector((store)=>store.isAddLoad)
  
  const isAddErr = useSelector((store)=>store.isAddErr)
  const handleChange = (e) => {
    settitle(e.target.value);
  };

  const handleClick = () => {
    dispacher(ATR());
    axios
      .post("http://localhost:8080/todos", {
        id: Date.now(),
        title,
        isCom: false,
        isfev: false,
      })
      .then((res) => {
        axios.get("http://localhost:8080/todos").then((res) => {
          dispacher(GTS(res.data));
          dispacher(ATS());
          console.log(res.data);
        });
      })
      .catch((err) => {
        dispacher(ATF());
      });
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="input-group mt-5 w-50 ">
        <input
          onChange={handleChange}
          value={title}
          type="text"
          className="form-control"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-success"
          type="button"
          id="button-addon2"
          onClick={handleClick}
        >
          {isAddLoad? 
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          : "ADD TODO"}
          
          {/* <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> */}
        </button>
      </div>
    </div>
  );
};
