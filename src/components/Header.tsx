import { HeaderContainer, Logo } from '@/styles/pages/app'
import React from 'react'

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <span>Front</span>
        <span>End</span>
      </Logo>
      <div>
        <nav>Consulta Tabela Fipe</nav>
      </div>
    </HeaderContainer>
  )
}
