import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Layout} from "../components/Layout";
import ContextoGeral from "../context/ContextoGeral";
import {useState} from "react";
import {Pessoa} from "../types/Pessoa";

function MyApp({Component, pageProps}: AppProps) {
    const [user, setUser] = useState({
        nome:'Megazoide', email:'fernando88', id:5
    });
    return (
        <ContextoGeral.Provider value={{user, setUser}}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ContextoGeral.Provider>

    );

}

export default MyApp
