import styled from "styled-components";

export default function ListaCategorias({
    categorias,
    aplicarFiltro,
    categoriaAtiva,
    filtroAtivo,
    limparFiltro,
}){

    return (
    <StyledCategorias>
        
          {categorias.map((categoria, indice) => {
            return <button className={categoria === categoriaAtiva ? "ativo" : ""} onClick={aplicarFiltro} key={indice}>{categoria}</button>
          })}

        
        { filtroAtivo && 
          <button onClick={limparFiltro} className="limpar">Limpar Filtro</button>}
    </StyledCategorias>
    )
}

const StyledCategorias = styled.div`

button {
    text-transform: capitalize;
    background-color: var(--cor-secundaria-fundo);
    color: white;
    border: none;
    padding: 15px;
    border-radius: 10px;
    margin: 23px;
    font-size: 14px;


    &.ativo {
      background-color: var(--cor-primaria-fundo);
    }
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