import styled from "styled-components"

export const Main = styled.main`
  height: 100%;
`
export const Container = styled.div`
  width: 1082px;
  padding: 24px;
  background-color: var(--background-white);
  border-radius: 12px;

  @media (max-width: 1200px) {
    width: 90vw;
  }
`
export const InputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 85px;
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;

  button {
    margin: 0 0 0 8px;
  }
`
