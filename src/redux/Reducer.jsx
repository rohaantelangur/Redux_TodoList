import React from 'react'
import { ADD_TODO_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, DECREMATE, EDIT_TODO_FAILURE, EDIT_TODO_REQUEST, EDIT_TODO_SUCCESS, GET_TODOS, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS, INCREMATE, REMOVE_TODO_FAILURE, REMOVE_TODO_REQUEST, REMOVE_TODO_SUCCESS, UPDATE_TODO_FAILURE, UPDATE_TODO_REQUEST, UPDATE_TODO_SUCCESS } from './actionType';

const initalState={
    todo:[],
    isLoading:false,
    isError:false,
    isEditLoad: false,
    isEditErr:false,
    isRemLoad:false,
    isRemErr:false,
    isAddLoad:false,
    isAddErr:false,
    isUpLoad:false,
    isUpErr:false,

}


export const Reducer = (state = initalState, {type, payload}) => {
  switch (type) {
    case GET_TODO_REQUEST:{
        return{ ...state, isLoading: true };
    }

    case GET_TODO_SUCCESS:{
        return{ ...state, todo:payload, isLoading: false };

    }

    case GET_TODO_FAILURE:{
        return{ ...state, isLoading: false, isError: payload };
    }

    //EDIT
    case EDIT_TODO_REQUEST:{
        return{ ...state, isEditLoad: true };
    }

    case EDIT_TODO_SUCCESS:{
        return{ ...state, isEditLoad: false };

    }

    case EDIT_TODO_FAILURE:{
        return{ ...state, isEditErr: true };
    }

    //REMOVE
    case REMOVE_TODO_REQUEST:{
        return{ ...state, isRemLoad: true };
    }

    case REMOVE_TODO_SUCCESS:{
        return{ ...state, isRemLoad: false };

    }

    case REMOVE_TODO_FAILURE:{
        return{ ...state, isRemErr: true };
    }


    //ADD
    case ADD_TODO_REQUEST:{
        return{ ...state, isAddLoad: true };
    }

    case ADD_TODO_SUCCESS:{
        return{ ...state, isAddLoad: false };

    }

    case ADD_TODO_FAILURE:{
        return{ ...state, isAddErr: true };
    }

    //UPPDATE
    case UPDATE_TODO_REQUEST:{
        return{ ...state, isUpLoad: true };
    }

    case UPDATE_TODO_SUCCESS:{
        return{ ...state, isUpLoad: false };

    }

    case UPDATE_TODO_FAILURE:{
        return{ ...state, isUpErr: true };
    }




    case GET_TODOS:{
        return {...state, todo:payload, isLoading:false } 
    }
        
        
  
    default:
        return state;
        break;
  }
}
