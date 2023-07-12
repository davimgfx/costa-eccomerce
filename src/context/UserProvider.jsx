import { createContext,  useEffect, useReducer, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener} from "../utils/firebase/firebase";
import {createAction} from "../utils/reducer/reducer"
import { getCategoriesAndDocumentsFromUser } from "../utils/firebase/firebase";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
  userInfos: {}
});


export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER"
}

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch(type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      }
    default:        
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
}

const INITIAL_STATE = {
  currentUser: null
}

export const UserProvider = ({ children }) => {
  const [ { currentUser } , dispatch ] = useReducer( userReducer, INITIAL_STATE)
  const [ userInfos, setUserInfos] = useState({});

  const setCurrentUser = (user) => {
    dispatch(createAction( USER_ACTION_TYPES.SET_CURRENT_USER,  user))
  }
  
  

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user){
        createUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])

  useEffect(() => {
    const getUsersInfos = async () => {
      const userTest = await getCategoriesAndDocumentsFromUser()
      setUserInfos(userTest)
    }
    
    getUsersInfos()
    
  }, [])

  const value = { currentUser, setCurrentUser, userInfos };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

/* 


*/