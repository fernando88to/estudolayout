import type {GetServerSideProps, GetServerSidePropsContext, NextPage} from 'next'
import Head from 'next/head'
import {useContext} from "react";
import ContextoGeral from "@/context/ContextoGeral";

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    return {
        props: {},
    };
};

const About: NextPage = () => {
    const tituloDaPagina: string = 'Pagina Sobre';
    const {user, setUser}: any = useContext(ContextoGeral);
    const handleClick = ()=> {
        setUser({
            nome:'Novo Usuario', email:'fernando88', id:5
        })
    }

    return (
        <div>
            <Head>
                <title>{tituloDaPagina}</title>
            </Head>
            <h2>{tituloDaPagina}</h2>
            <h3>Usuário logado {user.nome}</h3>

            <button value='Mudar usuario' onClick={handleClick}>Mudar usuário</button>
        </div>
    )
}

export default About
