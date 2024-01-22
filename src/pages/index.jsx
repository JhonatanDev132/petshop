import Head from "next/head";
import styled from "styled-components";
import ListaPosts from "@/components/ListaPosts";
import { useState, useEffect } from "react";

export default function Home() {
  const [listaDePosts, setListaDePosts] = useState([]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      try{
        const response = await fetch("http://10.20.46.31:5000/posts");
        const data = await response.json();
        setListaDePosts(data)
      } catch (error){
        console.error("Erro ao carregar posts!", error);
      }
    };
    
    fetchPosts();
  }, []);


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

       <ListaPosts posts={listaDePosts}/>
       

      </StyledHome>
    </>
  );
}



const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }
`;
