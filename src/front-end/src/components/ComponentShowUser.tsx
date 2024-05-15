import React, { useState } from "react";
import "./styles/ComponentShowUser.css";
import axios from "axios";

export const ComponentShowUser = (props: any) => {
  const [isEditing, setIsEditing] = useState(false);

  const [_id] = useState(props._id);
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);
  const [age, setAge] = useState(props.age);
  const [internalFunction, setInternalFunction] = useState(
    props.internalFunction
  );

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    setIsEditing(false);

    try {
      await axios.post("https://adm-management-api.vercel.app/edituser", {
        _id,
        name,
        email,
        age,
        internalFunction,
      });
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const deleteUser = async () => {
    try {
      await axios.delete(`http://localhost:3000/deletuser/${_id}`);
      props.getUsers();
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <>
      <div id="mainContainerCSU">
        <div id="mainContainerInsertInfo">
          <div className="containerInsertInfo">
            <div className="insertInfo">
              <h3>NOME</h3>
              {isEditing ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                <p className="optionInfo" id="name">
                  {name}
                </p>
              )}
            </div>
            <div className="insertInfo">
              <h3>E-MAIL</h3>
              {isEditing ? (
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              ) : (
                <p className="optionInfo" id="email">
                  {email}
                </p>
              )}
            </div>
          </div>

          <div className="containerInsertInfo">
            <div className="insertInfo">
              <h3>IDADE</h3>
              {isEditing ? (
                <input
                  type="text"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              ) : (
                <p className="optionInfo" id="idade">
                  {age}
                </p>
              )}
            </div>
            <div className="insertInfo">
              <h3>CARGO</h3>
              {isEditing ? (
                <input
                  type="text"
                  value={internalFunction}
                  onChange={(e) => setInternalFunction(e.target.value)}
                />
              ) : (
                <p className="optionInfo" id="function">
                  {internalFunction}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="insertInfo" id="sendInfo">
          {isEditing ? (
            <button onClick={handleSaveClick}>
              <span className="material-symbols-outlined">save</span>
            </button>
          ) : (
            <button onClick={handleEditClick}>
              <span className="material-symbols-outlined">edit</span>
            </button>
          )}
          <button onClick={deleteUser}>
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
      </div>
    </>
  );
};
