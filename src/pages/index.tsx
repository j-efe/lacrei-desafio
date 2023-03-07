import { ContainerGeneral } from '@/styles/GlobalSyle'
import {  HomeLeftInfos } from '@/styles/Home'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Desafio Lacrei</title>
      </Head>
      <ContainerGeneral>
        <HomeLeftInfos>
          <h1>Boas vindas a Lacrei Saúde</h1>
          <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
          <div>
            <Link href='/pessoa-usuaria'>
            <button className='pessoa-usuaria'>Pessoa Usuária</button>
            </Link>
            <Link href='profissional'>
            <button className='profissional'>Profissional</button>
            </Link>
          </div>
        </HomeLeftInfos>
        <Image src="/images/arte-inicio.svg" alt="arteInicio" width={555} height={421}/>
      </ContainerGeneral>
    </>
  )
}
