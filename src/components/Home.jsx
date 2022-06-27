import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { TodoInput } from './TodoApp/TodoInput'
import { TodosList } from './TodoApp/TodosList'

export const Home = () => {
  const navigate = useNavigate()
  // const isauth = useSelector((store)=>console.log(store.Authreducer.isAuth))
  // if(isauth){
  //  return  navigate("/")
  // }
  return (
    <div>
      <TodoInput/>
      <TodosList/>
    </div>
  )
}
