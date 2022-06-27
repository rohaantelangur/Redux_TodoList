import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LF, LR, LS } from "../AuthRedux/ActioCreate";

export const Login = () => {
  const logindata = useSelector((store) => store.Authreducer);
  const isAuth = useSelector((store) => store.Authreducer.isAuth);
  const [userName, setuserName] = useState("eve.holt@reqres.in");
  const [password, setpassword] = useState("cityslicka");
  const navigate = useNavigate();

  const dispach = useDispatch();

  const handleLogin = () => {
    dispach(LR());
    axios
      .post("https://reqres.in/api/login", {
        email: userName,
        password: password,
      })
      .then((res) => {
        // console.log(res.data)
        dispach(
          LS({
            ...logindata,
            userName,
            token: res.data.token,
          })
        );
        // navigate("/")
      })
      .catch((err) => {
        dispach(LF());
      });
  };
  return (
    <>
      {isAuth ? (
        'Already Login'
      ) : (
        <>
          <div className="container w-50 ">
            <div className="my-5 ">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                // value={"eve.holt@reqres.in"}
                onChange={(e) => {
                  setuserName(e.target.value);
                }}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                // value={"cityslicka"}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button
              onClick={handleLogin}
              type="submit"
              className="btn btn-primary"
            >
              {logindata.isLoad ? (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </>
      )}
    </>
  );
};
