import '../styles/globals.css'
import type {AppProps} from 'next/app'
import ContextoGeral from "@/context/ContextoGeral";
import {useState} from "react";
import {Layout} from "@/components/Layout";
import Head from "next/head";
import {ThemeProvider} from "@mui/material";
import {LighTheme} from "@/util/theme/LighTheme";


function MyApp({Component, pageProps}: AppProps) {
    const [user, setUser] = useState({
        nome:'Megazoide', email:'fernando88', id:5
    });
    return (
        <ContextoGeral.Provider value={{user, setUser}}>
            <ThemeProvider theme={LighTheme}>
                <Layout>
                    <Head>
                        <meta name="viewport" content="initial-scale=1, width=device-width" />
                    </Head>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>

        </ContextoGeral.Provider>

    );

}

export default MyApp
