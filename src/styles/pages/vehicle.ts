import { Chip, Container } from '@mui/material'
import styled from 'styled-components'
import { theme } from '../themes/default'

export const VehicleFipeContainer = styled(Container)`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  background-color: ${theme.palette.secondary.light};

  p {
    font-size: 0.875rem;
    color: #757575;
  }
`

export const FipePrice = styled.span`
  padding: 0.5rem 0.875rem;
  border-radius: 32px;

  font-size: 1.5rem;
  font-weight: bold;

  color: ${theme.palette.background.default};
  background-color: ${theme.palette.secondary.main};
`
