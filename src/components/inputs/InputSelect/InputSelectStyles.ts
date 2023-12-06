import styled from "styled-components"

export const InputSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 509px;

  @media (max-width: 1200px) {
    width: 42vw;
  }

  @media (max-width: 1000px) {
    width: 40vw;
  }

  @media (max-width: 600px) {
    width: 38vw;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`
export const Title = styled.label`
  color: var(--grey-dark);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
`
