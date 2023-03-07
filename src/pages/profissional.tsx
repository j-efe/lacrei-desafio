import { ContainerGeneral } from "@/styles/GlobalSyle";
import { ProfissionalLeftInfos } from "@/styles/Profissional";
import Head from "next/head";
import Image from "next/image";

export default function Profissional() {
  return (
    <>
      <Head>
        <title>Profissional | Desafio Lacrei</title>
      </Head>
      <ContainerGeneral>
        <ProfissionalLeftInfos>
          <h1>Profissional</h1>
          <p>Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+.</p>
        </ProfissionalLeftInfos>
        <Image className='imagens-paginas' src="/images/arte-profissional.svg" alt="arte-pessoa" width={555} height={421}/>
      </ContainerGeneral>
    </>
  )
}