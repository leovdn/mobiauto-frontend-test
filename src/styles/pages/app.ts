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

  z-index: 99;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  background-color: #fff;

  color: ${theme.palette.grey[700]};
  font-weight: bold;
`
export const Logo = styled.div`
  font-size: 1.5rem;
  color: ${theme.palette.grey[800]};

  & > span + span {
    color: ${theme.palette.primary.light};
  }
`
