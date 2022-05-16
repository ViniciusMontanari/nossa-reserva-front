import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import logo from './logo.svg';
import { UserStorage } from './UserContext'
import { CondominioStorage } from './CondominioContext'
import CadastrarCondominio from './Components/Condominio/CadastrarCondominio';


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
        </Routes>
        <Footer />
        </CondominioStorage>
        </UserStorage>
      </BrowserRouter> 
    </div>
  );
}

export default App;
