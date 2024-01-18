import Head from "next/head";
import styled from "styled-components";

export default function Produtos() {
  return (
    <>
      <Head>
        <title>PetShop | Produtos</title>
        <meta name="description" content="Conheça os nossos produtos" />
        <meta name="keywords" content="petshop, produtos"/>
      </Head>
      <StyledSection>
        <h2>Conheça nossos produtos</h2>
      </StyledSection>
    </>
  )
}

const StyledSection = styled.section`
  h2::before{
    content: "🎁 ";
  }
`