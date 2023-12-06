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
export const TableContainer = styled.div`
  width: 1082px;
  padding: 24px;
  background-color: var(--background-white);
  border-radius: 12px;

  div {
    width: 100%;
  }

  div ul:nth-child(odd) {
    background: var(--background-grey);
  }

  div ul:nth-child(even) {
    background: var(--background-white);
  }

  div ul {
    display: flex;
    padding: 0;
    margin: 0;
  }

  div ul:first-child li {
    display: flex;
    width: 250px;
    padding: 8px 24px;
    color: var(--grey-dark);
    background: var(--background-grey);
    border-radius: 4px 4px 0px 0px;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
  }

  div ul li {
    display: flex;
    width: 250px;
    padding: 12px 24px;
    color: var(--grey-base);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    list-style: none;
    line-break: anywhere;
  }

  div ul li span {
    display: none;
    margin: 0 10px 0 0;
    font-weight: 700;
    width: 60px;
  }

  div ul li:nth-child(5) {
    justify-content: end;
  }

  .icoEdit,
  .icoRemove {
    cursor: pointer;

    &:hover {
      color: var(--primary-base);
    }
  }

  .icoRemove {
    margin: 0 0 0 20px;
  }

  @media (max-width: 1200px) {
    width: 90vw;
  }

  @media screen and (max-width: 850px) {
    padding: 12px;

    div ul {
      display: block;
      margin: 0 0 20px 0;
      border: 1px solid var(--grey-light);
      border-radius: 12px;
    }

    div ul:first-child {
      display: none;
    }

    div ul li {
      width: 100%;
      padding: 6px 12px;
    }

    div ul li span {
      display: block;
    }
  }
`
