import Head from 'next/head'
import React from 'react'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import { FipePrice, VehicleFipeContainer } from '@/styles/pages/vehicle'

interface IVehicleFipeInfo {
  TipoVeiculo: number
  Valor: string
  Marca: string
  Modelo: string
  AnoModelo: number
  Combustivel: string
  CodigoFipe: string
  MesReferencia: string
  SiglaCombustivel: string
}

export default function Result(vehicleFipeInfo: IVehicleFipeInfo) {
  return (
    <>
      <Head>
        <title>Resultado Fipe - Front-End Test</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VehicleFipeContainer>
        <h1>
          <span>Tabela Fipe: Preço</span>
          <span>{vehicleFipeInfo.Marca}</span>
          <span>{vehicleFipeInfo.Modelo}</span>
          <span>{vehicleFipeInfo.AnoModelo}</span>
        </h1>
        <FipePrice>{vehicleFipeInfo.Valor}</FipePrice>
        <p>Este é o preço de compra do veículo</p>
      </VehicleFipeContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<
  any,
  { slug: string; modelo: string; marca: string; ano: string }
> = async ({ query }) => {
  const marca = String(query.marca)
  const modelo = String(query.modelo)
  const ano = String(query.ano)

  try {
    const { data } = await axios.get(
      `https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca}/modelos/${modelo}/anos/${ano}`
    )

    if (!data) {
      return { notFound: true }
    }

    return { props: { ...data } }
  } catch (error) {
    return { notFound: true }
  }
}
