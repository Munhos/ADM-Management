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
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    try {
      const res = await axios.get<User[]>("http://localhost:3000//allusers");
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
      <main>
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
