# PetShop: projeto Next.js

## Branch 21

**PWA** significa **Progressive Web Application** (Aplicativo Web Progressivo). Trata-se de uma abordagem para desenvolvimento
de aplicativos web que visa combinar características de sites e aplicativos móveis. As PWAs são construídas com tecnologias web
tradicionais (HTML5, CSS, JavaScript) e oferecem uma experiência semelhante à de aplicativos nativos, podendo até mesmo serem
instaladas no dispositivo móvel.

## Branch 19

### Endereço do banco de dados FireBase

`https://petshop-jhonatan-default-rtdb.firebaseio.com/`

### Firebase

Firebase é uma plataforma de serviços web (Web Services) com uma série de
funcionalidades de Back-End úteis para aplicações (web, apps, jogos).

No caso do PetShop, criamos um projeto Firebase e nele adicionamos um banco de dados
chamado "Firebase Realtime Database" para utilização como API JSON.

O Realtime Database é um banco de dados `NoSQl`, ou seja, um banco de dados
**não-relacional**. Ele é baseado em documentos no formato JSON contendo objetos
de dados.

### Lembrete sobre uso de APIs

Como se trata de uma API JSON, podemos utilizar qualquer um dos vrebos HTTP para consumo de APIs
no padrão REST:

- GET: ler, obter dados
- POST: criar, inserir
- PUT: atualizar tudo
- PATCH: atualizar parcialmente
- DELETE: excluir 

### Ajustes necessários para a aplicação usar a API Firebase JSON

- Em `index.jsx`:
  - Alterar a getStaticProps ajustando o endpoint para
  `posts.json` e gerando um novo array com os posts/objetos
  carregados a partir da `const dados`

- Em `[id].jsx`:
  - Alterar a `getStaticProps` ajustando o endpoint para `/posts/${id}.json`

## Branch 14-usando-rotas-dinâmicas-para-abrir-post(esqueci de criar a branch)

### Recursos necessários

- Pages/Rotas **dinâmicas** utilizando subpasta (posts) e arquivo
nomeado com **colchetes** indicando o nome(s) do(s) parâmetros. No
caso, foi criado o `[id].jsx`.

- `getStaticProps`: necessário para carregar os dados da API de
acordo com o parâmetro (usando a prop `{params}`) e gerar o HTML
via SSR.

- `getStaticPaths`: necessário para gerar os caminhos dinâmicos 
no momento do acesso à página.

### Documentação oficial do next sobre o Data Fetching

https://nextjs.org/docs/pages/building-your-application/data-fetching

### Resumo sobre as funções

`getStaticProps`: executada no lado do servidor (SSR - Server Side Rendering),
portanto logs, erros, lógicas, ações/comandos não aparecem para o usuário (mas aparecem no terminal para o programador(a)).

Na maioria dos casos usaremos `getStaticProps` para esse tipo de processamento em que os dados são consumidos (Data Fetching) através de uma API, já que esta função tem uma performance melhor por fazer o processamento apenas no momento da requisição.

Tambem há a função `getServerSideProps` que pode ser útil para páginas cujos dados mudam frequentemente ou são diferentes para cada usuario (como no caso de uso de dados de geolocalização).

## Branch 11-usando-json-server-como-fake-api

### Etapas(faça tudo usando o prompt do node)

1. Instalação global do `json-server`: `npm install -g json-server`
2. Colocação do arquivo `db.json` na raíz do projeto (este arquivo funcionará como um banco de dados para a API)
3. Pegar o IP da máquina usando `ipconfig`
4. Adicionar um script npm no `package.json` com a seguinte configuração:

`"api": "json-server --host 10.20.46.31 db.json --port 5000"`

5. Executar a API usando `npm run api`

## Recursos utilizados

- Next.js
- API Fake/Local
- Api via Firebase Realtime Database
- Componentes
- Rotas
- Map, Filter
- Manipulação de formulário
- Publicação na Vercel e na Netlify

### IMPORTANTE !

Após instalar o `styled-components`, ative o suporte à compilação dele pelo next.js modificando o arquivo `next.config.js`;

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
```