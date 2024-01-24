import Head from "next/head";
import styled from "styled-components";
import ListaPosts from "@/components/ListaPosts";
import { useState } from "react";
import serverApi from "./api/server";

export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverApi}/posts`);
    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.status} - ${resposta.statusText}`);
    }

  
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

  const aplicarFiltro = (event) => {
  const categoriaEscolhida = event.currentTarget.textContent;

  const postsFiltrados = posts.filter((post) => {
    return post.categoria === categoriaEscolhida || categoriaEscolhida === null;
  });

  setFiltroAtivo(true);
  setListaDePosts(postsFiltrados);
};

  const limparFiltro = () => {
    setFiltroAtivo(false);
    setListaDePosts(posts);
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

        <StyledCategorias>
        
          {categorias.map((categoria, indice) => {
            return <button onClick={aplicarFiltro} key={indice}>{categoria}</button>
          })}

        
        { filtroAtivo && 
          <button onClick={limparFiltro} className="limpar">Limpar Filtro</button>}
        </StyledCategorias>

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

const StyledCategorias = styled.div`

button {
    text-transform: capitalize;
    background-color: var(--cor-primaria-fundo);
    color: white;
    border: none;
    padding: 15px;
    border-radius: 10px;
    margin: 23px;
    font-size: 14px;
  }

.limpar {
  background-color: gray;
  &:hover {
    background-color: lightgray;
  }
  &::before {
    content: " 🧹";
  }
}
`;