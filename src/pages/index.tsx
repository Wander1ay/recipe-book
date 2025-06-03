import Head from "next/head";
import { HeaderDesktop } from "@tui-react/header";
import { ButtonDesktop } from "@tui-react/button";

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
        <HeaderDesktop>
          <HeaderDesktop.Wrapper>
            <HeaderDesktop.Content>
              <HeaderDesktop.Caption>tak tak tak</HeaderDesktop.Caption>
              <HeaderDesktop.Title>Recipe Book</HeaderDesktop.Title>
              <HeaderDesktop.Subtitle>More recipes</HeaderDesktop.Subtitle>
            </HeaderDesktop.Content>
            <HeaderDesktop.Accessories>
              <ButtonDesktop size="l">Button</ButtonDesktop>
            </HeaderDesktop.Accessories>
          </HeaderDesktop.Wrapper>
          <HeaderDesktop.Description>
            Добро пожаловать в приложение с рецептами!
          </HeaderDesktop.Description>
        </HeaderDesktop>
      </main>
    </>
  );
}
