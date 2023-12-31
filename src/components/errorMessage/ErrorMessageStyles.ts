import styled from "styled-components"

export const ErrorMessageContainer = styled.div`
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
