import React from "react";
import axios from "axios";

import Logo from "../../assets/nossa-reserva-logo.svg";
import "./index.css";

export default function HomeAdmin() {
    
  return (
    <>
      <div id="logo-titulo">
        <img src={Logo} alt="logo" />{" "}
        {/*Mais pra frente recuperaremos do back-end o logo do condomínio dinamicamente*/}
        <h1>Nossa Reserva - Condomínio Santa Maria Admin</h1>{" "}
        {/*Mais pra frente recuperaremos do back-end o nome do condomínio dinamicamente*/}
      </div>
      <div id="buttons">
        <button id="add-nome-logo" className="btn">
          Adicionar nome/logo do condomínio
        </button>
        <button id="add-use" className="btn">
          Adicionar novo usuário
        </button>
        <button id="add-area" className="btn">
          Adicionar área comum
        </button>
        <button id="listar-reserva" className="btn">
          Listar reservas
        </button>
      </div>
    </>
  );
}
