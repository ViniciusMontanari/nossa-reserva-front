import React from 'react';
import { Navigate } from 'react-router-dom';
import { CONDOMINIO_POST } from '../../Api';
import CondominioForm from '../../Hooks/CondominioForms';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import style from './ReservaAreaComum.module.css'

const ReservaArea = () => {

    const condominio = CondominioForm();
    const logotipo = CondominioForm('url');
    const areacomum = CondominioForm();
    const horarioentrada = CondominioForm();
    const horariosaida = CondominioForm()
    const gelo = CondominioForm();
    const carvao = CondominioForm();

    async function handleSubmit(event) {
        event.preventDefault();
        console.log('Condominio');
        console.log(condominio.value);
        console.log('url');
        console.log(logotipo.value);
        const {url, options} = CONDOMINIO_POST({
            nome: condominio.value,
            url: logotipo.value

        })
        const response = await fetch(url, options);
        console.log(url);
        console.log(response);
        console.log(options);
    }



    return (
        <section className={style.cadastrar}>
            <div className={style.forms}>
                <h1 className="title">Reserva de Área do Condominio</h1>
                <form onSubmit={handleSubmit}>
                    <Input label="Área" type="text" name="areacomum" {...areacomum}/>
                    <Input label="Horário de entrada" type="text" name="horarioentrada" {...horarioentrada}/>
                    <Input label="Horário de Saída" type="text" name="horariosaida" {...horariosaida}/>
                    <Input label="Deseja saco de carvão 5 Kg?" type="text" name="carvao" {...carvao}/>
                    <Input label="Deseja saco de gelo 6 Kg?" type="text" name="gelo" {...gelo}/>
                    <Button> Reservar </Button>
                </form>
            </div>
        </section>
    )
}

export default ReservaArea;