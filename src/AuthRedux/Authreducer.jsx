import React from 'react'
import { loadData, savedata } from '../utility/LocalStore'
import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from "./ActionType"


const initalstate=loadData('Auth')||{
    isAuth:false,
    token:"",
    userName:"",
    isLoad:false,
    isError:false
}

export const Authreducer = (state = initalstate,{type,payload}) => {
    switch (type) {
        case LOGIN_REQUEST:{
            return{
                ...state,
                isLoad:true,
            }
        }

        case LOGIN_SUCCESS:{
            savedata('Auth',{
                ...state,
                isAuth:true,
                isLoad:false,
                userName:payload.userName,
                token:payload.token                
            })
            return{
                ...state,
                isAuth:true,
                isLoad:false,
                userName:payload.userName,
                token:payload.token                
            }
        }

        case LOGIN_FAILED:{
            return{
                isError:true
            }
        }
            
         
        default:
            return state;
    }
  
}
