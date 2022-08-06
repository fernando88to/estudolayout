import type {GetServerSideProps, GetServerSidePropsContext, NextPage} from 'next'
import Head from 'next/head'
export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    return {
        props: {},
    };
};

const About: NextPage = () => {
    const tituloDaPagina:string = 'Pagina Sobre';
    return (
        <div>
            <Head>
                <title>{tituloDaPagina}</title>
            </Head>
            <h2>{tituloDaPagina}</h2>
        </div>
    )
}

export default About
