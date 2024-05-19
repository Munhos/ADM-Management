import "./styles/ComponentAddUser.css";
import axios from "axios";
import { useState } from "react";

export const ComponentAddUser = (props: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [internalFunction, setInternalFunction] = useState("");
  const [observations, setObservations] = useState("");

  const postUser = async () => {
    try {
      await axios.post("https://adm-management-api.vercel.app/adduser", {
        name,
        email,
        age,
        internalFunction,
        observations
      });
      await props.getUsers();
      setName("");
      setEmail("");
      setAge("");
      setInternalFunction("");
      setObservations("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div id="mainContainerCAU">
        <div id="containerCAU">
          <button onClick={props.toggleAddUserVisibility}>
            <span className="material-symbols-outlined">close</span>
          </button>
          <div id="CAUcontainerContainerInsertInfo">
            
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Nome..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="E-mail..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            
            
              <div className="mb-3">
                <label htmlFor="age" className="form-label">Idade</label>
                <input
                  type="text"
                  className="form-control"
                  id="age"
                  placeholder="Idade..."
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="internalFunction" className="form-label">Cargo</label>
                <input
                  type="text"
                  className="form-control"
                  id="internalFunction"
                  placeholder="Cargo..."
                  value={internalFunction}
                  onChange={(e) => setInternalFunction(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="observations" className="form-label">Observações</label>
                <textarea
                  className="form-control"
                  id="observations"
                  placeholder="Observações..."
                  value={observations}
                  onChange={(e) => setObservations(e.target.value)}
                />
              </div>
            
          </div>
          <div className="CAUinsertInfo">
            <button onClick={postUser}>ENVIAR</button>
          </div>
        </div>
      </div>
    </>
  );
};
