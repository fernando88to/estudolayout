import {useState} from "react";
import {GetServerSideProps, GetServerSidePropsContext, NextPage} from "next";
import Link from "next/link";
import {Pessoa} from "@/types/Pessoa";
import logger from "@/util/next-pino/logger";
import {pessoasServices} from "@/services/pessoasServices";


export const getServerSiderProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const pessoas: Pessoa[] = pessoasServices.list();

    return {
        props: {
            pessoas: pessoas
        }
    }

}

interface propsPage {
    pessoas: Pessoa[]
}


const FiltroPage: NextPage<propsPage> = ({pessoas}) => {
    const [filtro, setFiltro] = useState('');
    let pessoasFiltradas = pessoasServices.filterAllByName(filtro);
    logger.info("componente carragado!");

    return (
        <>
            <h5>Pagina de filtro</h5>
            <label>Procurar</label>
            <input type="text" name="filtro" onChange={event => setFiltro(event.target.value)}></input>


            <ul>
                {pessoasFiltradas && pessoasFiltradas.map(element => {
                    const url = "/dashboard/people/" + element.id;
                    return (
                        <Link key={element.id} href={url}>
                            <a>
                                <li key={element.id}>{element.nome}</li>
                            </a>
                        </Link>

                    )
                })
                }
            </ul>
        </>
    );


}

export default FiltroPage;