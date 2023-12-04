import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 509px;

  input {
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
    font-family: "Source Sans 3", sans-serif;
    transition: 0.1s;

    &::placeholder {
      color: var(--grey-light);
    }

    &:focus,
    &:hover {
      border: 1px solid var(--primary-base);
    }
  }
`
export const Title = styled.label`
  color: var(--grey-dark);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
`
