import React from 'react'
import { TodoInput } from './TodoApp/TodoInput'
import { TodosList } from './TodoApp/TodosList'

export const Home = () => {
  return (
    <div>
      <TodoInput/>
      <TodosList/>
    </div>
  )
}
