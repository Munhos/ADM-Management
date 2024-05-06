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
      <div id="mainContainer">
        <div id="containerOptions">
          <div className="optionsCase">INFORMAÇÕES GERAIS</div>
          <div className="optionsCase">
            <div
              onClick={toggleAddUserVisibility}
              id="containerAddUsers"
              className="containersUsers"
            >
              ADICIONAR COLABORADORES
            </div>
          </div>
        </div>
        <hr />

        <div id="containerInfo">
          <div className="containersInfo" id="containerUsers01">
            <h3>BEM VINDO!</h3>
          </div>
          <div className="containersInfo" id="containerUsers">
            {props.users.map((user: any) => (
              <ComponentShowUser
                getUsers={props.getUsers}
                _id={user._id}
                name={user.name}
                email={user.email}
                age={user.age}
                internalFunction={user.internalFunction}
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
