import React, { useState } from "react";

export const AuthContext = React.createContext({
  token: "",
  useremail: "",
  setLogin: (token, useremail) => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem("token"));
  const [authEmail, setAuthEmail] = useState(localStorage.getItem("useremail"));

  const setLoginHandler = (token, useremail) => {
    setAuthToken(token);
    setAuthEmail(useremail);
    console.log(token);
    console.log(useremail);
  };

  const logoutHandler = () => {
    setAuthToken("");
    localStorage.clear();
  };

  const contextValue = {
    token: authToken,
    useremail: authEmail,
    setLogin: setLoginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
