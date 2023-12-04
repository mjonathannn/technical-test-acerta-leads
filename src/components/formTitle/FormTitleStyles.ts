import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;

  :first-child {
    color: var(--secondary-base);
  }

  h1 {
    margin: 0 0 0 10px;
    color: var(--grey-darker);
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
  }
`
