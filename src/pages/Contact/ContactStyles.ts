import styled from "styled-components"

export const Main = styled.main`
  height: 100%;
`
export const Container = styled.div`
  width: 1082px;
  padding: 24px;
  background-color: var(--background-white);
  border-radius: 12px;
`
export const InputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 90px;
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;

  button {
    margin: 0 0 0 8px;
  }
`
export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;

  :first-child {
    color: var(--semantic-negative-dark);
    margin: 0 8px 0 0;
  }

  span {
    color: var(--semantic-negative-dark);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
  }
`
