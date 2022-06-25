import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DEC, INC } from '../redux/actionCreater'

export const Counter = () => {
    
  const dispach = useDispatch()
  const state = useSelector((state)=>state)

  return (
    <div>
        <h3>Counter App</h3>
   <p>{state}</p>
   <button onClick={()=>{dispach(INC(1))}}>Incremate</button>
   <button onClick={()=>{dispach(DEC(1))}}>Decremate</button>
        

    </div>
  )
}
