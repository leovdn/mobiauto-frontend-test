import { HeaderContainer, Logo } from '@/styles/pages/app'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <HeaderContainer>
      <Link href="/">
        <Logo>
          <div className="front-logo">
            <span>Front</span>
            <span>End</span>
          </div>
          <div className="consulta-logo">
            <nav>Consulta Tabela Fipe</nav>
          </div>
        </Logo>
      </Link>
    </HeaderContainer>
  )
}
