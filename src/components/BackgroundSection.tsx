import Image from 'next/image'
import React from 'react'
import { BackgroundSectionContainer } from '../styles/components/backgroundSection'

import BgDetails from '../assets/bg-details.svg'
import BgDetails2 from '../assets/bg-details2.svg'

export default function BackgroundSection() {
  return (
    <BackgroundSectionContainer>
      <Image src={BgDetails2} alt={''} />
      <Image src={BgDetails} alt={''} />
    </BackgroundSectionContainer>
  )
}
