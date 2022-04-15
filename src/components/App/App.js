import React from "react";
import {Routes, Route} from 'react-router-dom'

import HomeAdmin from "../HomeAdmin/HomeAdmin";
import TelaLogin from "../TelaLogin/TelaLogin";
import TelaCadastroUser from "../TelaCrudUser/TelaCadastroUser";
import CadAreaComum from "../CrudAreaComum/CadAreaComum";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<TelaLogin />} />
        <Route path="/home-admin" element={<HomeAdmin />} />
        <Route path="/user-cadastro" element={<TelaCadastroUser />} />
        <Route path="/cad-area" element={<CadAreaComum />} />
      </Routes>
    </>
  )
}

export default App;
