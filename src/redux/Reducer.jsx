import React from 'react'
import { DECREMATE, GET_TODOS, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS, INCREMATE } from './actionType';

const initalState={
    counter : 0,
    todo:[],
    isLoading:false,
    isError:false,
}


export const Reducer = (state = initalState, {type, payload}) => {
  switch (type) {
    case INCREMATE:{
        return (state + payload)
    }
    case DECREMATE:{
        if(state!==0) return (state - payload)
    }
    case GET_TODO_REQUEST:{
        return{ ...state, isLoading: true };
    }

    case GET_TODO_SUCCESS:{
        return{ ...state,todo:[...state.todo,payload], isLoading: true };

    }

    case GET_TODO_FAILURE:{
        return{ ...state, isLoading: false, isError: payload };
    }

    case GET_TODOS:{
        return {...state, todo:payload, isLoading:false } 
    }
        
        
  
    default:
        return state;
        break;
  }
}
