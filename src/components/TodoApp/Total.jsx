import React from 'react'
import { useSelector } from 'react-redux'

export const Total = () => {
    const todos = useSelector((state)=>state.todo)
    console.log(todos);
    let count = 1
  return (
    <div className='d-flex justify-content-center mt-5'>
        <table class="table w-50 table-success table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Todos</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
  {todos.map((element)=>{return(
    <tr key={element.id}>
      <th scope="row">{count++}</th>
      <td>{element.title}</td>
      <td>{element.isCom?"Complate":"Proccesing"}</td>
    </tr>
      )})}
  </tbody>
</table>
    </div>
  )
}
