import type {GetServerSideProps, GetServerSidePropsContext, NextPage} from 'next'
import Head from 'next/head'
import logger from "@/util/next-pino/logger";
import {Button} from "@mui/material";
import {useAppThemeContext} from "../hook";


export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    return {
        props: {},
    };
};

const Home: NextPage = () => {
    const {toggleTheme} = useAppThemeContext();
    logger.info('Home page loaded');
    return (
        <div>
            <Head>
                <title>Pagina Inicial</title>
            </Head>
            <h2>Pagina inicial</h2>
            <Button variant="text" color="primary">
                Hello World
            </Button>
            <Button variant="contained" color="primary">
                Hello World
            </Button>
            <Button variant="outlined" color="primary" onClick={toggleTheme}>
                Trocar Thema
            </Button>


        </div>
    )
}

export default Home
