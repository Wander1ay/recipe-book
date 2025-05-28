import Head from "next/head";
import { HeaderDesktop } from '@tui-react/header'

export default function Home() {
    return (
        <>
            <Head>
                <title>Recipe Book</title>
                <meta name="description" content="Поиск и подбор рецептов" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>Recipe Book</h1>
                <p>Добро пожаловать в приложение с рецептами!</p>
                <HeaderDesktop>f</HeaderDesktop>
            </main>
        </>
    );
}
