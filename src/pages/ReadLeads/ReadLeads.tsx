import { useNavigate } from "react-router-dom"

import { Main, Section } from "./ReadLeadsStyle"

import { MainHeader } from "../../components/headers"
import { NewLeadButton } from "../../components/buttons"

const ReadLeads = (): JSX.Element => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/createLeads")
  }

  return (
    <Main>
      <MainHeader />

      <Section>
        <h1>Consulta de Leads</h1>

        <NewLeadButton handleClick={() => handleClick()} />
      </Section>
    </Main>
  )
}

export default ReadLeads
