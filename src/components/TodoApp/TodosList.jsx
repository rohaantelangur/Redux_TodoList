import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { GTR, GTS, GTF, RTR, RTS, RTF, UTF, UTS, UTR } from "../../redux/actionCreater";
import { Link, useNavigate } from "react-router-dom";

export const TodosList = () => {
  const todos = useSelector((state) => state.todo);
  // console.log(todos);
  const navigate = useNavigate()
  const dispacher = useDispatch();
  const isRemLoad = useSelector((store)=>store.isRemLoad)
  const isUpLoad = useSelector((store)=>store.isUpLoad)

  const getTodos = () => {
    dispacher(GTR());
    axios
      .get("http://localhost:8080/todos")
      .then((res) => {
        dispacher(GTS(res.data));
      })
      .catch((err) => {
        dispacher(GTF());
      });
  };

  const handleCheck = (item) => {
    dispacher(UTR());
    axios
      .patch(`http://localhost:8080/todos/${item.id}`, { isCom: !item.isCom })
      .then((res) => {
        dispacher(UTS());
        getTodos();

      }).catch((err)=>{
        dispacher(UTF());
      })
  };

  const handledel = (item) => {
    dispacher(RTR());
    axios.delete(`http://localhost:8080/todos/${item.id}`)
    .then((res) => {
    dispacher(RTS());
      getTodos();
    }).catch((err)=>{
    dispacher(RTF());
    })
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="container w-50" >
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
            {isUpLoad? 
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          : 
            <input
            type="checkbox"
            checked={item.isCom ? true : false}
            onChange={() => handleCheck(item)}
            />
          }
            <h5>{item.title}</h5>
            <div>
              
                <button className="btn btn-info " onClick={()=>{navigate(`/todo/${item.id}`)}}>Show</button>
                <button className="btn btn-primary mx-3" onClick={()=>{navigate(`/todo/${item.id}/edit`)}}>Edit</button>
              
              <button
                className="btn btn-danger"
                onClick={() => handledel(item)}
              >
                {isRemLoad? 
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          : "Remove"}
                
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
