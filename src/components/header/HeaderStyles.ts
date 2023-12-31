import styled from "styled-components"

export const HeaderContainer = styled.header`
  margin: 32px 0;
`
export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  margin: 32px 0 0 0;

  h1 {
    margin: 0;
    color: var(--grey-darker);
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 18px;
    }
  }
`
