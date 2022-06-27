import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from "./ActionType"


export const LR =(payload)=>{
    return {
        type:LOGIN_REQUEST,
        payload
    }
}

export const LS =(payload)=>{
    return {
        type:LOGIN_SUCCESS,
        payload
    }
}

export const LF =(payload)=>{
    return {
        type:LOGIN_FAILED,
        payload
    }
}