import styled from "styled-components"

type Props = {
  appearance: "primary" | "secondary"
}

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  min-width: 120px;
  padding: 0 14px;
  background: ${({ appearance }) =>
    appearance === "primary"
      ? "var(--primary-base)"
      : "var(--background-white)"};
  border: 1px solid var(--primary-base);
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;

  span {
    font-family: "Source Sans 3", sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: ${({ appearance }) =>
      appearance === "primary"
        ? "var(--background-white)"
        : "var(--primary-base)"};
  }

  :nth-child(2) {
    color: var(--primary-base);
    font-size: 24px;
    margin: 0 0 0 4px;
  }

  &:hover {
    background: ${({ appearance }) =>
      appearance === "primary"
        ? "var(--primary-darker)"
        : "var(--primary-base)"};

    span,
    :nth-child(2) {
      color: var(--background-white);
    }
  }

  &:disabled {
    border: 1px solid var(--background-grey);
    background: var(--background-grey);
    cursor: default;

    span,
    :nth-child(2) {
      color: var(--grey-light);
    }
  }

  @media (max-width: 380px) {
    height: 35px;
    min-width: auto;
  }
`
