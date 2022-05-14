import React from 'react'
import './CadastroCondominio.css'

export default function CadCondominio() {
  return (
    <>
    <div className='cond-container'>
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
    </div>
    </>
  )
}
