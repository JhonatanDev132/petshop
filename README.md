# PetShop: projeto Next.js

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