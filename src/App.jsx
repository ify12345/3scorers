import React from "react";
import SignUp from "./components/SignUp";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import OverView from "./components/OverView";
import Users from "./components/Users";
import Admins from "./components/Admins";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/overview" element={<OverView />} />
          <Route path="/users" element={<Users />} />
          <Route path="/admins" element={<Admins />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
