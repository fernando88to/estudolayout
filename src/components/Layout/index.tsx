// JSX.Element not permit string
// or React.ReactChild permit string ;
// or ReactNode permit all
import React from "react";
import Head from "next/head";
import Link from "next/link";

interface propsLayout {
    children: React.ReactNode
}

export function Layout(props: propsLayout) {
    return (
        <div id="root">
            <Head>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/home/fernando/IdeaProjects/next/estudolayout/public/favicon.ico"/>
            </Head>
            <h1>Sistema</h1>
            <ul>
                <li>
                    <Link href="/">
                        <a>Inicio</a>
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/about">
                        <a>Pagina Sobre</a>
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/people">
                        <a>Pessoas</a>
                    </Link>
                </li>
            </ul>
            <main>
                {props.children}
            </main>


            <footer>Rodape</footer>
        </div>
    );
}