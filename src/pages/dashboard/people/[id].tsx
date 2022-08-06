import type {GetServerSideProps, GetServerSidePropsContext, NextPage} from 'next'
import Head from 'next/head'
import {Pessoa} from "../../../types/Pessoa";
import {pessoasServices} from "../../../pessoasServices";


interface props {
    pessoa?: Pessoa

}

export const getServerSideProps: GetServerSideProps<props> = async (context: GetServerSidePropsContext) => {
    // @ts-ignore
    const id: number = context.query.id ? Number.parseInt(context.query.id.toString()) : 0;
    let pessoa: Pessoa | undefined = pessoasServices.findById(id);


    return {
        props: {
            pessoa: pessoa
        },
    };
};

const About: NextPage<props> = (props: props) => {
    const tituloDaPagina: string = 'Pessoa show';
    return (
        <div>
            <Head>
                <title>{tituloDaPagina}</title>
            </Head>
            <h2>{tituloDaPagina}</h2>
            <p>Pessoa {props.pessoa?.nome}</p>
        </div>
    )
}

export default About
