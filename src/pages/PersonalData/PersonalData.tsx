import { Main, Container } from "./PersonalDataStyles"

import { FormTitle, Header, StepCounter } from "../../components"

const PersonalData = (): JSX.Element => {
  return (
    <Main>
      <Header label="Cadastro de Leads" />

      <Container>
        <StepCounter firstStep />

        <FormTitle personalData />
      </Container>
    </Main>
  )
}

export default PersonalData
