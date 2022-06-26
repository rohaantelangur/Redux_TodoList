import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const Total = () => {
    const todos = useSelector((state)=>state.todo)
    const [todocount, settodocount] = useState(todos.length)

    let comp = 0
    let incom = 0
    todos.map((item)=>{
      if(item.isCom===true) comp++
    })
    incom = todocount-comp;
    let count = 1
  return (
    <>
      <div className="d-flex justify-content-center gap-5 mt-3">
        <div className='border border-danger p-2 w-25'> <h1>{todocount}</h1><h4>Total</h4></div>
        <div className='border border-danger p-2 w-25'><h1>{comp}</h1><h4>Complate</h4></div>
        <div className='border border-danger p-2 w-25'> <h1>{incom}</h1><h4>Incomplate</h4></div>
      </div>
    <div className='d-flex justify-content-center mt-5'>
        <table className="table w-50 table-success table-striped">
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
      </>
  )
}
