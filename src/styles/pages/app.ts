import styled from 'styled-components'
import { theme } from '../themes/default'

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  padding: 1rem 3rem;

  display: flex;
  justify-content: center;

  z-index: 99;

  font-weight: bold;

  color: ${theme.palette.grey[700]};
  background-color: #fff;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);

  a {
    text-decoration: none;
    display: contents;
  }
`

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 1.5rem;
  color: ${theme.palette.grey[800]};

  .front-logo {
    & > span + span {
      color: ${theme.palette.primary.light};
    }
  }

  .consulta-logo {
    font-size: 1rem;
  }
`
