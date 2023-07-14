import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { ErrorMessage, ErrorSection } from '@/styles/pages/error'
import { MainContainer } from '@/styles/pages/home'
import BackgroundSection from '@/components/BackgroundSection'

import carCrash from '../assets/crash.svg'

export default function Error() {
  return (
    <>
      <Head>
        <title>Ops! Informações Não Encontradas</title>
        <meta
          name="description"
          content="Erro 500 - Algo ocorreu com o servidor"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <BackgroundSection />
        <ErrorSection>
          <ErrorMessage>
            <h1>OPS!</h1>
            <h2>
              Pode ser que o veículo que você tentou buscar não tenha
              informações da Tabela Fipe no momento.
            </h2>
            <p>
              Utilize o link abaixo para retornar à tela de busca de veículos.
            </p>
            <Link href="/">Consultar Tabela Fipe</Link>
          </ErrorMessage>
          <Image src={carCrash} alt="Batida entre carros" />
        </ErrorSection>
      </MainContainer>
    </>
  )
}
