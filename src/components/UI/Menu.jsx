import Link from "next/link";
import styled from "styled-components";

export default function Menu(){
    return (
        <>
            <StyledNav>
                <Link href="/" className="borda-esquerda">Blog</Link>
                <Link href="/produtos">Produtos</Link>
                <Link href="/sobre">Sobre</Link>
                <Link href="/contato" className="borda-direita">Contato</Link>
            </StyledNav>
        </>
    )
}

const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        text-decoration: none;
        padding: 10px;
        /* margin: 5px; */
        color: white;
        background-color: var(--cor-primaria-fundo);
    }

    .borda-esquerda{
        border-radius: var(--borda-arredondada-esquerda);
    }

    .borda-direita{
        border-radius: var(--borda-arredondada-direita);
    }

     a:hover,
     a:focus {
        color: var(--cor-secundaria-hover);
    }

    @media screen and (min-width: 700px) {
        a {
            font-size: 1.25rem;
        }
    }
`;  