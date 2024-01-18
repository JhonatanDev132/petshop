import Head from "next/head";
import styled from "styled-components";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>PetShop | Sobre</title>
        <meta name="description" content="Saiba Sobre Nós" />
        <meta name="keywords" content="petshop, sobre"/>
      </Head>
      <StyledSection>
        <h2>Sobre nossos produtos</h2>
      </StyledSection>
    </>
  )
}

const StyledSection = styled.section`
  h2::before{
    content: "💡";
  }
`
