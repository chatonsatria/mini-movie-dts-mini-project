import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import IndexRouter from "./pages/routers/IndexRouter";
import AuthContextProvider from "./store/auth-context";
import Unauthorized from "./pages/unauthorized/Unauthorized";
import LogoutSuccess from "./pages/auth/LogoutSuccess";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          {/* index */}
          <Route path="/*" element={<IndexRouter />} />
          {/* login */}
          <Route path="/login" element={<Login />} />
          {/* register */}
          <Route path="/register" element={<Register />} />
          {/* unauthorized */}
          <Route path="/unauthorized" element={<Unauthorized />} />
          {/* logout success */}
          <Route path="/logout-success" element={<LogoutSuccess />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
