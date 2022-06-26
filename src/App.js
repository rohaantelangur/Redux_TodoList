import React from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { EditTodo } from "./components/TodoApp/EditTodo";
import { Total } from "./components/TodoApp/Total";
import { Login } from "./components/Login";
import { ShowTodo } from "./components/TodoApp/ShowTodo";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo/:id" element={<ShowTodo />} />
        <Route path="/todo/:id/edit" element={<EditTodo />} />
        <Route path="/total" element={<Total />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
