import styled from 'styled-components'

export const BackgroundSectionContainer = styled.div`
  top: 56px;
  left: 0;
  width: 100%;
  display: flex;
  position: absolute;
  justify-content: space-between;
  z-index: -1;

  & img {
    max-width: 290px;
    max-height: 230px;

    @media (max-width: 768px) {
      width: 30%;
      height: 30%;
    }
  }
`
