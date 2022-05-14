import React from 'react'

import Logo from "../../assets/nossa-reserva-logo.svg";
import './index.css'

export default function TelaCadastroUser() {
  return (
    <>
      <form id="user-form">
        <label>
          Nome do Usuário
          <input type="text" name="name" className="form-input" />
        </label>
        <label>
          Endereço
          <input type="text" name="name" className="form-input" />
        </label>
        <label>
          Senha do Usuário
          <input type="text" name="name" className="form-input" />
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
