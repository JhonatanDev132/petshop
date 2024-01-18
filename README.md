# PetShop: projeto Next.js

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