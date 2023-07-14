import styled from 'styled-components'
import { theme } from '../themes/default'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
`

export const Header = styled.header`
  padding: 1rem 0;
  height: 56px;
  width: 100%;
  margin: 0 auto;
  z-index: 99;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  background-color: #fff;

  color: ${theme.palette.grey[700]};
  font-weight: bold;
`
