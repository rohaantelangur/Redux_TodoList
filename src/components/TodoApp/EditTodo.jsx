import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const EditTodo = () => {
  const { id } = useParams();
  // console.log(id);

  const [newtitle, setnewtitle] = useState("");
  // console.log(newtitle , "title");

  const handleChange = (e) => {
    setnewtitle(e.target.value);
  };

  const handleClick = () => {
    axios
      .patch(`http://localhost:8080/todos/${id}`, { title: newtitle })
      .then((res) => console.log(res));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/todos/${id}`)
      .then((res) => setnewtitle(res.data.title));
  }, []);

  return (
    <div className="d-flex justify-content-center">
      {/* <h3>Edit Your Todo</h3> */}
      {/* <input type="text" value={newtitle} onChange={handleChange}/>
      <button onClick={handleClick} >Edit</button> */}
      <div class="input-group m-3 w-25">
        <input
          type="text"
          value={newtitle} 
          onChange={handleChange}
          class="form-control"
          aria-describedby="button-addon2"
        />
        <button
          class="btn btn-outline-success"
          type="button"
          id="button-addon2"
          onClick={handleClick}
        >
          Edit
        </button>
      </div>
    </div>
  );
};
