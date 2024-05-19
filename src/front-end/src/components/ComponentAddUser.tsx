import "./styles/ComponentAddUser.css";
import axios from "axios";
import { useState } from "react";

export const ComponentAddUser = (props: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [internalFunction, setInternalFunction] = useState("");
  const [observations, setObservations] = useState(props.observations);

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
            <div className="CAUcontainerInsertInfo">
              <div className="CAUinsertInfo">
                <h3>NOME</h3>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="CAUinsertInfo">
                <h3>E-MAIL</h3>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="CAUcontainerInsertInfo">
              <div className="CAUinsertInfo">
                <h3>IDADE</h3>
                <input
                  type="text"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="CAUinsertInfo">
                <h3>CARGO</h3>
                <input
                  type="text"
                  value={internalFunction}
                  onChange={(e) => setInternalFunction(e.target.value)}
                />
              </div>

              <div className="CAUinsertInfo">
                <h3>OBSERVAÇÕES</h3>
                <input
                  type="text"
                  value={observations}
                  onChange={(e) => setObservations(e.target.value)}
                />
              </div>
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
