import Head from "next/head";
import styled from "styled-components";

export default function Contato() {
  return (
    <>
      <Head>
        <title>PetShop | Contato</title>
        <meta name="description" content="Entre em contato com a nossa equipe" />
        <meta name="keywords" content="petshop, contato"/>
      </Head>
      <StyledSection>
        <h2>Fale conosco</h2>
      </StyledSection>
    </>
  )
}

const StyledSection = styled.section`
  h2::before{
    content: "💌 ";
  }
`
