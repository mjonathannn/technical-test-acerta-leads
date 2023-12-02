import { Main } from "./ReadLeadsStyle"

import { Header, Filter } from "../../components"

const ReadLeads = (): JSX.Element => {
  return (
    <Main>
      <Header label="Consulta de Leads" showButton />

      <Filter />
    </Main>
  )
}

export default ReadLeads
