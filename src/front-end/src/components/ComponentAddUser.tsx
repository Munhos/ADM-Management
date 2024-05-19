import axios from "axios";
import { useState } from "react";
import "./styles/ComponentAddUser.css"; // Importe o arquivo CSS

export const ComponentAddUser = (props:any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [internalFunction, setInternalFunction] = useState("");
  const [observations, setObservations] = useState("");
  const [isBlinking, setIsBlinking] = useState(false);

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
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 1000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div id="mainContainerCAU">
        <div id="containerCAU" className={isBlinking ? "blinking-border" : "blinking-border-error"}>
          <button onClick={props.toggleAddUserVisibility} type="button" className="btn btn-danger">
            <i className="bi bi-x-lg"></i>
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
            <button onClick={postUser} type="button" className="btn btn-primary">Enviar</button>
          </div>
        </div>
      </div>
    </>
  );
};
