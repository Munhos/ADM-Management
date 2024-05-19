import React, { useState } from "react";
import "./styles/ComponentShowUser.css";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const ComponentShowUser = (props: any) => {
  const [isEditing, setIsEditing] = useState(false);

  const [_id] = useState(props._id);
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);
  const [age, setAge] = useState(props.age);
  const [internalFunction, setInternalFunction] = useState(props.internalFunction);
  const [observations, setObservations] = useState(props.observations);

  const editUser = async () => {
    setIsEditing(false);

    const FormControlInput1 = document.getElementById("FormControlInput1") as HTMLInputElement;
    const FormControlInput2 = document.getElementById("FormControlInput2") as HTMLInputElement;
    const FormControlInput3 = document.getElementById("FormControlInput3") as HTMLInputElement;
    const FormControlInput4 = document.getElementById("FormControlInput4") as HTMLInputElement;
    const FormControlTextarea1 = document.getElementById("FormControlTextarea1") as HTMLInputElement;

    if (FormControlInput1 && FormControlInput2 && FormControlInput3 && FormControlInput4 && FormControlTextarea1) {
      FormControlInput1.disabled = true;
      FormControlInput2.disabled = true;
      FormControlInput3.disabled = true;
      FormControlInput4.disabled = true;
      FormControlTextarea1.disabled = true;
    }

    try {
      await axios.post("https://adm-management-api.vercel.app/edituser", {
        _id,
        name,
        email,
        age,
        internalFunction,
        observations
      });
      props.getUsers(); // Atualiza a lista de usuários após a edição
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const saveUser = () => {
    setIsEditing(true);

    const FormControlInput1 = document.getElementById("FormControlInput1") as HTMLInputElement;
    const FormControlInput2 = document.getElementById("FormControlInput2") as HTMLInputElement;
    const FormControlInput3 = document.getElementById("FormControlInput3") as HTMLInputElement;
    const FormControlInput4 = document.getElementById("FormControlInput4") as HTMLInputElement;
    const FormControlTextarea1 = document.getElementById("FormControlTextarea1") as HTMLInputElement;

    if (FormControlInput1 && FormControlInput2 && FormControlInput3 && FormControlInput4 && FormControlTextarea1) {
      FormControlInput1.disabled = false;
      FormControlInput2.disabled = false;
      FormControlInput3.disabled = false;
      FormControlInput4.disabled = false;
      FormControlTextarea1.disabled = false;
    }
  };

  const deleteUser = async () => {
    try {
      await axios.delete(`https://adm-management-api.vercel.app/deleteuser/${_id}`);
      props.getUsers();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <>
      <div className="accordion accordion-flush" style={{ width: "90%" }} id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              FUNCIONÁRIO
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <div className="mb-3">
                {isEditing ? (
                  <button onClick={editUser}>
                    <span className="material-symbols-outlined">save</span>
                  </button>
                ) : (
                  <button onClick={saveUser}>
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                )}
                <button onClick={deleteUser}>
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
              <div className="mb-3">
                <label htmlFor="FormControlInput1" className="form-label">Nome</label>
                <input disabled={!isEditing} type="text" className="form-control" id="FormControlInput1" placeholder="Nome..." value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="FormControlInput2" className="form-label">Email</label>
                <input disabled={!isEditing} type="email" className="form-control" id="FormControlInput2" placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="FormControlInput3" className="form-label">Idade</label>
                <input disabled={!isEditing} type="number" className="form-control" id="FormControlInput3" placeholder="Idade..." value={age} onChange={(e) => setAge(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="FormControlInput4" className="form-label">Cargo</label>
                <input disabled={!isEditing} type="text" className="form-control" id="FormControlInput4" placeholder="Cargo..." value={internalFunction} onChange={(e) => setInternalFunction(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="FormControlTextarea1" className="form-label">Observações</label>
                <textarea disabled={!isEditing} className="form-control" id="FormControlTextarea1" value={observations} onChange={(e) => setObservations(e.target.value)}></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.4.0/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
};
