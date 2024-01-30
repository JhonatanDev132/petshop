import Head from "next/head";
import styled from "styled-components";
import ListaPosts from "@/components/ListaPosts";
import { useState } from "react";
import serverApi from "./api/server";
import ListaCategorias from "@/components/ListaCategorias";

export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverApi}/posts.json`);
    const dados = await resposta.json();
    console.log(dados);
    

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

  
    /* Colocando os dados dos objetos dentro de um array */
    const arrayDePosts = Object.keys(dados).map((post) => {
      return {
        ...dados[post],
        id: post,
      };
    });

    console.log(arrayDePosts);

    const categorias = dados.map((post) => post.categoria);

    const categoriasUnicas = [...new Set(categorias)];

    return {
      props: {
        posts: dados,
        categorias: categoriasUnicas,
      },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
    return {
      notFound: true,
    };
  }
}

export default function Home({ posts, categorias }) {
  const [listaDePosts, setListaDePosts] = useState(posts);
  const [filtroAtivo, setFiltroAtivo] = useState(false);
  const [categoriaAtiva, setCategoriaAtiva] = useState("");

  const aplicarFiltro = (event) => {
  const categoriaEscolhida = event.currentTarget.textContent;

  const postsFiltrados = posts.filter((post) => {
    return post.categoria === categoriaEscolhida || categoriaEscolhida === null;
  });

  setFiltroAtivo(true);
  setListaDePosts(postsFiltrados);

  // Sinalizando o state com o texto/categoria escolhida
  setCategoriaAtiva(categoriaEscolhida)
};

  const limparFiltro = () => {
    // Sinalizando o state como filtro inativo (false)
    setFiltroAtivo(false);

    // Atualizando o  state da listaDePosts para os posts originais
    setListaDePosts(posts);

    //Atualizando o state da categoria ativa para o vazio ""
    setCategoriaAtiva("")
  }

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

      <ListaCategorias 
      categoriaAtiva={categoriaAtiva}
      aplicarFiltro={aplicarFiltro}
      filtroAtivo={filtroAtivo}
      limparFiltro={limparFiltro}
      categorias={categorias} />
        

        <ListaPosts posts={listaDePosts} />
      </StyledHome>
    </>
  );
}

const StyledHome = styled.section`
  h2::before {
    content: "📰 ";
  }

`;

