import React from 'react'
import { ADD_TODOS, DECREMATE, GET_TODOS, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS, INCREMATE } from './actionType'

export const INC = (payload) => {
  return {
    type:INCREMATE,
    payload
  }
}

export const DEC = (payload) => {
    return {
      type:DECREMATE,
      payload
    }
  }

  export const GTR = (payload) => {
    return {
      type:GET_TODO_REQUEST,
      payload
    }
  }

  export const GTS = (payload) => {
    return {
      type:GET_TODO_SUCCESS,
      payload
    }
  }


  export const GTF = (payload) => {
    return {
      type:GET_TODO_FAILURE,
      payload
    }
  }

  export const GT = (payload) => {
    return {
      type:GET_TODOS,
      payload
    }
  }

  export const AT = (payload) => {
    return {
      type:ADD_TODOS,
      payload
    }
  }
  


