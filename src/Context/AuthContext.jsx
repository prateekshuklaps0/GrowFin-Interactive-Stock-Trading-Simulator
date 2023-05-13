import { createContext, useState, useEffect, useReducer } from "react";
import { useSearchParams } from "react-router-dom";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  // const URL = process.env.REACT_APP_DEVELOPMENT_URL;
  const URL = `https://grow-fin-18k6.onrender.com`;

  const [searchParam, setSearchParams] = useSearchParams();
  const [sliderVal, setSliderVal] = useState({ x: -50, y: 1.5 });
  const [menuSlide, setMenuSlide] = useState({ x: 10, y: 51 });
  const [highlight, setHighlight] = useState("Docs");
  const [isAuth, setAuth] = useState(false);
  const [userFound, setUserFound] = useState({});
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuth");
    if (storedAuth == "true") {
      setAuth((prev) => true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isAuth", isAuth.toString());

    if (!isAuth) {
      setSearchParams("");
    }
  }, [isAuth, userFound]);

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
