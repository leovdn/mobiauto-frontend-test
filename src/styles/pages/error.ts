import styled from 'styled-components'
import { theme } from '../themes/default'

export const ErrorSection = styled.section`
  min-height: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  justify-items: end;
  align-items: center;
  align-content: space-around;
  justify-content: space-between;

  img {
    max-width: 600px;
    height: 100%;
    width: 100%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    justify-items: center;
  }
`

export const ErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  text-align: center;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    color: ${theme.palette.primary.main};
  }

  h2 {
    font-size: 1.225rem;
    line-height: 1.4;
    font-weight: 500;
    color: ${theme.palette.grey[600]};
  }

  p {
    font-size: 1rem;
    margin-top: 1rem;
    font-weight: 500;
    line-height: 1.6;
    margin-top: 1.875rem;
  }

  a {
    display: contents;
    color: ${theme.palette.primary.main};
    font-weight: bold;
  }
`
