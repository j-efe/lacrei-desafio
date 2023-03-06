import { ContainerGeneral } from "@/styles/Home";
import { UsuariaLeftInfos } from "@/styles/PessoaUsuaria";
import Head from "next/head";
import Image from "next/image";

export default function PessoaUsuaria() {
  return (
    <>
      <Head>
        <title>Pessoa Usuária | Desafio Lacrei</title>
      </Head>
      <ContainerGeneral>
        <UsuariaLeftInfos>
          <h1>Pessoa Usuária</h1>
          <p>A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.</p>
        </UsuariaLeftInfos>
        <Image src="/images/arte-pessoa.svg" alt="arte-pessoa" width={555} height={421}/>
      </ContainerGeneral>
    </>
  )
}