import styled from "styled-components"

type Props = {
  indexIsEven: boolean
}

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

  @media (max-width: 1200px) {
    width: 90vw;
  }
`
export const TableHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 24px;
  border-radius: 4px 4px 0px 0px;
  background: var(--background-grey);

  div {
    width: 208px;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    color: var(--grey-dark);
  }
`
export const TableRow = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 24px;
  border-right: 1px solid var(--background-grey);
  border-left: 1px solid var(--background-grey);
  background-color: ${({ indexIsEven }) =>
    indexIsEven ? "var(--background-white)" : "var(--background-system)"};

  div {
    width: 208px;
    color: var(--grey-base);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
`
