import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import arrayPosts from "./api/array-posts";

export default function Home() {
  return (
    <>
      <Head>
        <title>PetShop</title>
        <meta
          name="description"
          content="Web App PetShop criado com Next.js como exemplo do curso Téc. Informática para Internet"
        />
        <meta name="keywords" content="PetShop, Banho, Ração, Gato, Cachorro" />
      </Head>
      <StyledHome>
        <h2>Pet Notícias</h2>
       
      </StyledHome>
    </>
  );
}



const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }
`;
