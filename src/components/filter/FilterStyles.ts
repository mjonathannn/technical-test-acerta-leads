import styled from "styled-components"

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1082px;
  height: 165px;
  background-color: var(--background-white);
  padding: 24px;
  border-radius: 12px;
`
// export const ErrorMessage = styled.div`
//   display: flex;
//   align-items: center;

//   :first-child {
//     color: var(--semantic-negative-dark);
//     margin: 0 8px 0 0;
//   }

//   label {
//     color: var(--semantic-negative-dark);
//     font-size: 12px;
//     font-style: normal;
//     font-weight: 400;
//     line-height: 120%;
//   }
// `
export const InputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 85px;
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;

  button {
    margin: 0 0 0 8px;
  }
`
