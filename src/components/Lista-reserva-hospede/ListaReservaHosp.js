import React from 'react';
import { Navigate } from 'react-router-dom';
import { CONDOMINIO_POST } from '../../Api';
import CondominioForm from '../../Hooks/CondominioForms';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import style from './ListaReservaHosp.module.css';

const ListaReservaHosp = () => {

    const areacomum = CondominioForm();
    const reservamensalporpessoa = CondominioForm();
    const horariofuncionamento = CondominioForm();
    const fotoespaco = CondominioForm('url');

    async function handleSubmit(event) {
        event.preventDefault();
        console.log('Lista Reserva Admin');
        console.log(areacomum.value);
        console.log('url');
        console.log(fotoespaco.value);
        const {url, options} = CONDOMINIO_POST({
            nome: areacomum.value,
            url: fotoespaco.value

        })
        const response = await fetch(url, options);
        console.log(url);
        console.log(response);
        console.log(options);
    }

    return (
        <section className={style.cadastrar}>
            <div className={style.forms}>
                <h1 className="title">Lista de Reservas</h1>
                <form onSubmit={handleSubmit}>
                    <table> 
                        <th>Área Comum</th><th>Data</th><th>Horário</th>
                        <tr>
                            <td>Área Comum X</td><td>22/01/2022</td><td>16:00 - 18:00</td><button className='btn-upload'> Excluir </button>
                        </tr>
                        <tr>
                            <td>Área Comum Y</td><td>22/02/2022</td><td>16:00 - 18:00</td><button className='btn-upload'> Excluir </button>
                        </tr>
                        <tr>
                            <td>Área Comum Z</td><td>24/07/2022</td><td>16:00 - 18:00</td><button className='btn-upload'> Excluir </button>
                        </tr>
                    </table>
                   
                </form> 
            </div>
        </section>
    )
}

export default ListaReservaHosp;