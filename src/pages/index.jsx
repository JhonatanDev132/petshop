import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <>
    <Head>
      <title>PetShop 2024</title>
      <meta name="description" content="Bem vindo ao nosso PetShop" />
      <meta name="keywords" content="petshop"/>
    </Head>
      <StyledHome>
        <h2>Pet Notícias</h2>
      </StyledHome>
    </>
  )
}

const StyledHome = styled.section`
  h2::before { content: "📰 "; }
`
