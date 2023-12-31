import React from "react";
import Home from "./components/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/auth/login";
import PrivateRoute from "./utils/router/private.route";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
