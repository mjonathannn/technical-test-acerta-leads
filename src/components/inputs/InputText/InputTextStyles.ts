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
      padding: 8px 10px 8px 10px;
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
export const Input = styled.input`
  height: 40px;
  margin: 4px 0;
  padding: 8px 0px 8px 16px;
  border-radius: 4px;
  outline: none;
  border: 1px solid var(--grey-lighter);
  background: var(--background-white);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  transition: 0.1s;

  &::placeholder {
    color: var(--grey-light);
  }

  &:focus,
  &:hover {
    border: 1px solid var(--primary-base);
  }

  &:disabled {
    background: var(--background-grey);
    cursor: default;

    &:focus,
    &:hover {
      border: 1px solid var(--grey-lighter);
    }
  }
`
