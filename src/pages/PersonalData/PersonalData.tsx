import { Main, Container } from "./PersonalDataStyles"

import { Header, StepCounter } from "../../components"

const PersonalData = (): JSX.Element => {
  return (
    <Main>
      <Header label="Cadastro de Leads" />

      <Container>
        <StepCounter firstStep />
      </Container>
    </Main>
  )
}

export default PersonalData
