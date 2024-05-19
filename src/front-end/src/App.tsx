import React, { useState, useEffect } from "react";
import axios from "axios";
import "./components/styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ComponentInitialPage } from "./components/ComponentInitialPage";

interface User {
  _id: string;
  name: string;
  email: string;
  age: number;
  internalFunction: string;
  observations: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    try {
      const res = await axios.get<User[]>("https://adm-management-api.vercel.app/allusers");
      setUsers(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <BrowserRouter>
      <main className="bg-dark vw-100 vh-100 d-flex justify-content-center align-items-center">
        <Routes>
          <Route
            path="/"
            element={<ComponentInitialPage users={users} getUsers={getUsers} />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
