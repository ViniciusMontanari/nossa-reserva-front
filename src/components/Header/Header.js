import React from "react";
import axios from "axios";

import Logo from "../../assets/nossa-reserva-logo.svg";
import "../../index.css";

export default function Header() {
    const res = ""
   
    const getPokemon = async () => {
          const url = `https://pokeapi.co/api/v2/pokemon/pikachu`;
          const res = await axios.get(url);
      };
    
    getPokemon()

    console.log("OEEEEE")
    console.log(res)
    console.log("TCHAAAAU")

    return (
    <>
       <head>
        <title>Nossa Reserva</title>
      </head>
      <body>
        <header>
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="nome-condominio">
            <h1>Condomínio</h1>
          </div>
          <div className="menu"> 
            Menu
          </div>
        </header>
      </body>
    </>
  );
}
