import styled from "styled-components"

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 133px;
  background-color: var(--background-white);
  border: 2px solid var(--primary-base);
  border-radius: 4px;
  cursor: pointer;

  span {
    font-family: "Source Sans 3", sans-serif;
    font-size: 16px;
    font-style: normal;
    color: var(--primary-base);
    font-weight: 600;
    line-height: 120%;
    margin: 0 5px 0 0;
  }

  .icon {
    color: var(--primary-base);
    font-size: 27px;
  }
`
