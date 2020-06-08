import React, { createContext, useReducer, useMemo } from "react";

export const GlobalContext = createContext();

const LOGIN = "LOGIN";
const SIGNUP = "SIGNUP";

const initialState = {
  user: {}
};

export const GlobalProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);
  return <GlobalContext.Provider value={value} {...props} />;
};

function reducer(state, action) {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case SIGNUP:
      return action.payload;
    default:
      return state;
  }
}
