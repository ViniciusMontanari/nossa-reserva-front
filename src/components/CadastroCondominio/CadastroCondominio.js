import React from 'react'

import Logo from "../../assets/nossa-reserva-logo.svg";
import '../../index.css'

export default function CadCondominio() {
  return (
    <>
      <div id="logo-titulo">
        <img src={Logo} alt="logo" />{" "}
        {/*Mais pra frente recuperaremos do back-end o logo do condomínio dinamicamente*/}
        <h1>Nossa Reserva - Condomínio Santa Maria Admin</h1>{" "}
        {/*Mais pra frente recuperaremos do back-end o nome do condomínio dinamicamente*/}
      </div>
      <form id="condominio-form">
        <label>
          Nome do condominio
          <input type="text" name="condominio" className="form-input" />
        </label>
        <label>
          Logotipo Condominio
          <input type="text" name="logotipo" id="logotipo" className="form-input" />
        </label>
      </form>
      <div id="buttons-cad-user">
        <button id="cancelar-cadastro" className="btn-cad-user">
          Cancelar
        </button>
        <button id="salvar-cadastro" className="btn-cad-user">
          Salvar
        </button>
      </div>
    </>
  )
}
