import React, { useState } from "react";
import axios from "axios";

export const ComponentShowUser = (props:any) => {
  const [isEditing, setIsEditing] = useState(false);

  const {
    _id,
    name: initialName,
    email: initialEmail,
    age: initialAge,
    internalFunction: initialInternalFunction,
    observations: initialObservations,
    getUsers,
  } = props;

  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [age, setAge] = useState(initialAge);
  const [internalFunction, setInternalFunction] = useState(initialInternalFunction);
  const [observations, setObservations] = useState(initialObservations);

  const editUser = async () => {
    setIsEditing(false);

    try {
      await axios.post("https://adm-management-api.vercel.app/edituser", {
        _id,
        name,
        email,
        age,
        internalFunction,
        observations,
      });
      getUsers(); // Atualiza a lista de usuários após a edição
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const saveUser = () => {
    setIsEditing(true);
  };

  const deleteUser = async () => {
    try {
      await axios.delete(`https://adm-management-api.vercel.app/deletuser/${_id}`);
      getUsers();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const uniqueId = `${_id}-accordion`;

  return (
    <>
      <div className="accordion accordion-flush" style={{ width: "90%" }} id={uniqueId}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${uniqueId}-collapse`}
              aria-expanded="false"
              aria-controls={`${uniqueId}-collapse`}
            >
              {name}
            </button>
          </h2>
          <div id={`${uniqueId}-collapse`} className="accordion-collapse collapse" data-bs-parent={`#${uniqueId}`}>
            <div className="accordion-body">
              <div className="mb-3">
                {isEditing ? (
                  <button onClick={editUser} type="button" className="btn btn-primary">
                    save
                  </button>
                ) : (
                  <button onClick={saveUser} type="button" className="btn btn-primary">
                    edit
                  </button>
                )}
                <button onClick={deleteUser} type="button" className="btn btn-primary" style={{ marginLeft: "10px" }}>
                  delete
                </button>
              </div>
              <div className="mb-3">
                <label htmlFor={`${uniqueId}-FormControlInput1`} className="form-label">
                  Nome
                </label>
                <input
                  disabled={!isEditing}
                  type="text"
                  className="form-control"
                  id={`${uniqueId}-FormControlInput1`}
                  placeholder="Nome..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor={`${uniqueId}-FormControlInput2`} className="form-label">
                  Email
                </label>
                <input
                  disabled={!isEditing}
                  type="email"
                  className="form-control"
                  id={`${uniqueId}-FormControlInput2`}
                  placeholder="Email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor={`${uniqueId}-FormControlInput3`} className="form-label">
                  Idade
                </label>
                <input
                  disabled={!isEditing}
                  type="number"
                  className="form-control"
                  id={`${uniqueId}-FormControlInput3`}
                  placeholder="Idade..."
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor={`${uniqueId}-FormControlInput4`} className="form-label">
                  Cargo
                </label>
                <input
                  disabled={!isEditing}
                  type="text"
                  className="form-control"
                  id={`${uniqueId}-FormControlInput4`}
                  placeholder="Cargo..."
                  value={internalFunction}
                  onChange={(e) => setInternalFunction(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor={`${uniqueId}-FormControlTextarea1`} className="form-label">
                  Observações
                </label>
                <textarea
                  disabled={!isEditing}
                  className="form-control"
                  id={`${uniqueId}-FormControlTextarea1`}
                  value={observations}
                  onChange={(e) => setObservations(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
