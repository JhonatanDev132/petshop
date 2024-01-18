'use client'

import Link from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";

export default function Menu(){

    const pathname = usePathname();


    

    return (
        <>
            <StyledNav>
                <Link href="/" className={`borda-esquerda ${pathname === "/" ? "active" : ""}`}>Blog</Link>
                <Link href="/produtos" className={`${pathname === "/produtos" ? "active" : ""}`}>Produtos</Link>
                <Link href="/sobre" className={`${pathname === "/sobre" ? "active" : ""}`}>Sobre</Link>
                <Link href="/contato" className={`borda-direita ${pathname === "/contato" ? "active" : ""}`}>Contato</Link>
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

    .active {
        background-color: pink;
        color: white;
        font-weight: bold;
    }
    @media screen and (min-width: 700px) {
        a {
            font-size: 1.1rem;
            padding-left: 2rem;
            padding-right: 2rem;
        }

        margin-left: auto;
    }
`;  