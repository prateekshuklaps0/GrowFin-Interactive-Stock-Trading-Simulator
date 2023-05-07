import { createContext, useState, useEffect, useReducer } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const URL = process.env.REACT_APP_DEVELOPMENT_USERS;
  // const URL = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/users`;
  const [sliderVal, setSliderVal] = useState({ x: -50, y: 1.5 });
  const [menuSlide, setMenuSlide] = useState({ x: 10, y: 51 });
  const [highlight, setHighlight] = useState("Docs");
  const [isAuth, setAuth] = useState(false);
  const [userFound, setUserFound] = useState({});
  const [userName, setUserName] = useState("");

  return (
    <AuthContext.Provider
      value={{
        URL,
        sliderVal,
        setSliderVal,
        menuSlide,
        setMenuSlide,
        highlight,
        setHighlight,
        isAuth,
        setAuth,
        userName,
        setUserName,
        userFound,
        setUserFound,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

// #FAFF00; - yellow
