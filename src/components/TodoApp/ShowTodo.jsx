import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export const ShowTodo = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [Show, setShow] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:8080/todos/${id}`)
        .then((res) => setShow(res.data));
    }, [])
    
  return (
    <div className='d-grid gap-2 col-6 mx-auto'>
        <h3>{Show.title}</h3>
        <button className="btn btn-primary" onClick={()=>navigate(`/todo/${Show.id}/edit`)} type="button">Edit</button>
    </div>
  )
}
