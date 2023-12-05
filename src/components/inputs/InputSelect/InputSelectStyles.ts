import styled from "styled-components"

export const Container = styled.div`
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

  @media (max-width: 550px) {
    input {
      padding: 6px 0px 6px 6px;
    }
  }

  @media (max-width: 450px) {
    width: 36vw;
  }
`
export const Title = styled.label`
  color: var(--grey-dark);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
`
