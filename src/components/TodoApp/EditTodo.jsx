import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ETF, ETR, ETS } from "../../redux/actionCreater";

export const EditTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const isEditLoad = useSelector((store)=>store.Reducer.isEditLoad)
  const isEditErr = useSelector((store)=>store.Reducer.isEditErr)
  const dispacher = useDispatch();


  // console.log(id);

  const [newtitle, setnewtitle] = useState("");
  // console.log(newtitle , "title");

  const handleChange = (e) => {
    setnewtitle(e.target.value);
  };

  const handleClick = () => {
    dispacher(ETR());
    axios
      .patch(`http://localhost:8080/todos/${id}`, { title: newtitle })
      .then((res) => 
    dispacher(ETS())
    ).catch((err=>{
    dispacher(ETF());
    }))
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/todos/${id}`)
      .then((res) => setnewtitle(res.data.title));
  }, []);

  return (
    <>
    <div className="d-flex justify-content-center">
    {isEditErr? "Error" :
    <div className="input-group m-3 w-25">
        <input
        type="text"
        value={newtitle} 
        onChange={handleChange}
          className="form-control"
          aria-describedby="button-addon2"
          />
        <button
        className="btn btn-outline-success"
        type="button"
        id="button-addon2"
        onClick={handleClick}
        >
        
        {isEditLoad? 
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          : "Edit"}
          </button>
          </div>
        }
          </div>
        <div className="d-grid gap-2 col-2 mx-auto">
          <button className="btn btn-success" onClick={()=>{navigate("/")}}>Home</button>
        </div>
          </>
  );
};
