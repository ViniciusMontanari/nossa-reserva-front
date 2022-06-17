import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import logo from './logo.svg';
import { UserStorage } from './UserContext'
import { CondominioStorage } from './CondominioContext'
import CadastrarCondominio from './components/Condominio/CadastrarCondominio';
import HomeAdmin from './components/HomeAdmin/HomeAdmin';
import ReservaArea from './components/ReservaArea/ReservaArea';
import CadastrarUsuario from './components/Cadastro-Usuario/CadastroUsuario';
import HomeUser from './components/Home-user/HomeUser';
import ListaReservaAdmin from './components/Lista-reserva-admin/ListaReservaAdmin';
import ListaReservaHosp from './components/Lista-reserva-hospede/ListaReservaHosp';

function App() {
  return (
    <div>
      <BrowserRouter>
      <UserStorage>
      <CondominioStorage>
        <Header />
        <Routes>
          <Route path="/" element ={<Home />} />
          <Route path="/login/*" element ={<Login />} />
          <Route path="/cadastrarcondominio" element ={<CadastrarCondominio />} />
          <Route path="/homeadmin" element ={<HomeAdmin />} />
          <Route path="/reservararea" element ={<ReservaArea />} />
          <Route path='/cadastrousuario' element={<CadastrarUsuario />} />
          <Route path='/homeuser' element={<HomeUser />} />
          <Route path='/listareservaadmin' element={<ListaReservaAdmin />} />
          <Route path='/listareservahosp' element={<ListaReservaHosp />} />
        </Routes>
        <Footer />
        </CondominioStorage>
        </UserStorage>
      </BrowserRouter> 
    </div>
  );
}

export default App;
