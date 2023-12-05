import axios from "axios"
import { useEffect, useState } from "react"

import {
  Container,
  TableRow,
  TableContainer,
  Main,
  TableHeader,
} from "./ReadLeadsStyle"

import { Header } from "../../components"

type LeadsListDataProps = {
  leadData: {
    cpf: string
    name: string
    maritalStatus: string
    spouseName: string
    email: string
    phone: string
  }
  leadId: string
}

const ReadLeads = (): JSX.Element => {
  const [leadsListData, setLeadsListData] = useState<LeadsListDataProps[]>([])

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3333/readLeads")
      .then((response) => {
        setLeadsListData(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <Main>
      <Header label="Consulta de Leads" showButton />

      <Container></Container>

      <TableContainer>
        <TableHeader>
          <div>Nome</div>
          <div>CPF</div>
          <div>E-mail</div>
          <div>Telefone</div>
        </TableHeader>
        {leadsListData.map((elem: LeadsListDataProps, index: number) => (
          <TableRow key={index} indexIsEven={index % 2 === 0}>
            <div>{elem.leadData.name}</div>
            <div>{elem.leadData.cpf}</div>
            <div>{elem.leadData.email}</div>
            <div>{elem.leadData.phone}</div>
          </TableRow>
        ))}
      </TableContainer>
    </Main>
  )
}

export default ReadLeads
