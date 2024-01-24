import Head from "next/head";
import styled from "styled-components";
import Container from "@/components/UI/Container";
import Image from "next/image";

export default function Pagina404(){
    return <>
        <Head>
            <title>Ops - PetShop</title>
        </Head>
        <Styled404>
            <h2>Au au au! Foi mal!</h2>
            <Container>
                <h3>Ops! Algo deu errado.</h3>
                <Image src="/images/404.svg" width={500} height={296}
                alt="Ilustração de um cachorrinho bonitinho" />
            </Container>
        </Styled404>
    </>
}

const Styled404 = styled.article`
    text-align: center;
    h2::before {
        content: "😱 ";
    }
`;