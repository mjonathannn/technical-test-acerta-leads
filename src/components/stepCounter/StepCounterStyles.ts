import styled from "styled-components"

export const StepCounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 20px 0;
`
export const Line = styled.span`
  width: 220px;
  height: 1px;
  background: var(--grey-lighter);
  margin: -30px 45px 0 45px;
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin: 0 0 10px 0;
  }

  span {
    color: var(--grey-dark);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
`
