import { useNavigate } from "react-router-dom"

import { Main, Section } from "./ReadLeadsStyle"

import { Filter } from "../../components"
import { MainHeader } from "../../components/headers"
import { LabelButton } from "../../components/buttons"

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

        <LabelButton
          type="Primary"
          label="Novo Lead"
          showIcon
          handleClick={() => handleClick()}
        />
      </Section>

      <Filter />
    </Main>
  )
}

export default ReadLeads
