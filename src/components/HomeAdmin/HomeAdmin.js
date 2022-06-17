import React from 'react';
import style from './HomeAdmin.module.css';
import Button from '../Forms/Button';
import { CONDOMINIO_POST } from '../../Api';
import CondominioForm from '../../Hooks/CondominioForms';


const HomeAdmin = () => {

    const condominio = CondominioForm();
    const logotipo = CondominioForm('url');

    async function handleSubmit(event) {
        event.preventDefault();
        console.log('Condominio');
        console.log(condominio.value);
        console.log('url');
        console.log(logotipo.value);
        const { url, options } = CONDOMINIO_POST({
            nome: condominio.value,
            url: logotipo.value

        })
        const response = await fetch(url, options);
        console.log(url);
        console.log(response);
        console.log(options);
    }



    return ( <
        section className = { style.cadastrar } >
        <
        div className = { style.forms } >
        <
        h1 className = "title" > Home Administrador < /h1> <
        Button className = { style.homeadmin } > Adicionar nome / logo do condomínio < /Button> <
        Button className = { style.homeadmin } > Adicionar novo usuário < /Button> <
        Button className = { style.homeadmin } > Adicionar área comum < /Button> <
        Button className = { style.homeadmin } > Listar Reserva < /Button>

        <
        /div> < /
        section >
    )
}

export default HomeAdmin;