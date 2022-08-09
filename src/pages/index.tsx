import type {GetServerSideProps, GetServerSidePropsContext, NextPage} from 'next'
import Head from 'next/head'
import logger from "@/util/next-pino/logger";
//import '@fontsource/roboto';

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {

    return {
        props: {},
    };
};

const Home: NextPage = () => {

    //console.log('Home page loaded')
    logger.info('Home page loaded');
    return (
        <div>
            <Head>
                <title>Pagina Inicial</title>
            </Head>
            <h2 role="titulo">Pagina inicial</h2>


        </div>
    )
}

export default Home
