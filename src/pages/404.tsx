import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { ErrorMessage, ErrorSection } from '@/styles/pages/error'
import { BackgroundSection, MainContainer } from '@/styles/pages/home'

import BgDetails from '../assets/bg-details.svg'
import BgDetails2 from '../assets/bg-details2.svg'
import bugImage from '../assets/bug.svg'

export default function Error() {
  return (
    <>
      <Head>
        <title>Ops! Página Não Encontrada</title>
        <meta
          name="description"
          content="Erro 500 - Algo ocorreu com o servidor"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <BackgroundSection>
          <Image src={BgDetails2} alt={''} />
          <Image src={BgDetails} alt={''} />
        </BackgroundSection>
        <ErrorSection>
          <ErrorMessage>
            <h1>OPS!</h1>
            <h2>
              Pode ser que a página que você tentou acessar não esteja
              disponível no momento.
            </h2>
            <p>
              Utilize o link abaixo para retornar à tela de busca de veículos.
            </p>
            <Link href="/">Consultar Tabela Fipe</Link>
          </ErrorMessage>
          <Image src={bugImage} alt="Batida entre carros" />
        </ErrorSection>
      </MainContainer>
    </>
  )
}
