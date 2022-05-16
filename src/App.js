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
