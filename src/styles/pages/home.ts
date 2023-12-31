import { Paper, Button } from '@mui/material'
import styled from 'styled-components'
import { theme } from '../themes/default'

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 12rem;
  max-width: 1180px;
`

export const TableContainer = styled(Paper)`
  width: 100%;
  max-width: 40rem;
  padding: 2rem 3rem;
  margin: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`

export const ConsultPriceButton = styled(Button)`
  padding: 0.75rem 2rem;
  background-color: ${theme.palette.primary.main};
  text-transform: none;
  font-weight: bold;

  a {
    text-decoration: none;
    color: ${theme.palette.background.default};
  }

  input {
    & .MuiFilledInput-root {
      overflow: hidden;
      border: 1px solid;
      background-color: #fff;

      & .MuiFilledInput-root {
        background-color: transparent;
      }
    }
  }

  &:disabled {
    a {
      color: ${theme.palette.text.disabled};
    }
  }
`
