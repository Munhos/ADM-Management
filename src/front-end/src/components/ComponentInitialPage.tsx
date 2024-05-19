import React, { useState } from "react";
import { ComponentShowUser } from "./ComponentShowUser";
import { ComponentAddUser } from "./ComponentAddUser";
import "./styles/ComponentInitialPage.css";

export const ComponentInitialPage = (props: any) => {
  const [isAddUserVisible, setIsAddUserVisible] = useState(false);

  const toggleAddUserVisibility = () => {
    setIsAddUserVisible(!isAddUserVisible);
  };

  return (
    <>
      <div id="mainContainer" style={{height:"90vh"}}>
        <div id="containerOptions">
          <div className="optionsCase">INFORMAÇÕES GERAIS</div>
          <div className="optionsCase">
            <button onClick={toggleAddUserVisibility} type="button" className="btn btn-primary">
              <i className="bi bi-file-earmark-plus"></i>
            </button>
          </div>
        </div>
        <hr />

        <div id="containerInfo">
          <div className="containersInfo" id="containerUsers">
            {props.users.map((user: any) => (
              <ComponentShowUser
              key={user._id}
              getUsers={props.getUsers}
              _id={user._id}
              name={user.name}
              email={user.email}
              age={user.age}
              internalFunction={user.internalFunction}
              observations={user.observations}
            />
            
            ))}
          </div>
        </div>
      </div>

      {isAddUserVisible && (
        <ComponentAddUser
          getUsers={props.getUsers}
          toggleAddUserVisibility={toggleAddUserVisibility}
        />
      )}
    </>
  );
};
