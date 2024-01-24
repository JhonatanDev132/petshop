# PetShop: projeto Next.js

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