import type {GetServerSideProps, GetServerSidePropsContext, NextPage} from 'next'
import Head from 'next/head'
import {Pessoa} from "../../../types/Pessoa";
import {pessoasServices} from "../../../pessoasServices";
import Link from "next/link";


interface props {
    pessoa: Pessoa[]

}

export const getServerSideProps: GetServerSideProps<props> = async (context: GetServerSidePropsContext) => {
    let pessoasList: Pessoa[] = pessoasServices.list();

    return {
        props: {
            pessoa: pessoasList
        },
    };
};

const About: NextPage<props> = (props: props) => {
    const tituloDaPagina: string = 'Listagem de pessoas';
    return (
        <div>
            <Head>
                <title>{tituloDaPagina}</title>
            </Head>
            <h2>{tituloDaPagina}</h2>
            <p>quantidade de pessoas {props.pessoa.length}</p>
            <br/>
            <br/>
            <br/>
            <ul>
                {props.pessoa && props.pessoa.map(element => {
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

        </div>
    )
}

export default About
