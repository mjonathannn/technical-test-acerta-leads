import styled from "styled-components"

type Props = {
  appearance: "Primary" | "Secondary"
}

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  min-width: 120px;
  padding: 0 14px;
  background-color: ${({ appearance }) =>
    appearance === "Primary"
      ? "var(--primary-base)"
      : "var(--background-white)"};
  border: 1px solid var(--primary-base);
  border-radius: 4px;
  cursor: pointer;

  label {
    font-family: "Source Sans 3", sans-serif;
    font-size: 16px;
    font-style: normal;
    color: ${({ appearance }) =>
      appearance === "Primary"
        ? "var(--background-white)"
        : "var(--primary-base)"};
    font-weight: 600;
    line-height: 120%;
    cursor: pointer;
  }

  :nth-child(2) {
    color: var(--primary-base);
    font-size: 24px;
    margin: -3px 0 0 4px;
  }
`
