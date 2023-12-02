import { Main, PersonalDataContainer } from "./CreateLeadsStyles"

import { Header } from "../../components"

const CreateLeads = (): JSX.Element => {
  return (
    <Main>
      <Header label="Cadastro de Leads" />

      <PersonalDataContainer></PersonalDataContainer>
    </Main>
  )
}

export default CreateLeads
