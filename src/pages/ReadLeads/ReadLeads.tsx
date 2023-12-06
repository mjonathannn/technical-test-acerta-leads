import axios from "axios"
import { LuTrash } from "react-icons/lu"
import { useEffect, useState } from "react"
import { MdOutlineModeEdit } from "react-icons/md"

import { Container, TableContainer, Main } from "./ReadLeadsStyle"

import { Header } from "../../components"
import { ENDPOINT_URL } from "../../constants/app"
import { useAppContext } from "../../context/appContext"

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

  const { notify } = useAppContext()

  const readLeads = () => {
    axios
      .get(`${ENDPOINT_URL}/readLeads`)
      .then(({ data }) => {
        setLeadsListData(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    readLeads()
  }, [])

  return (
    <Main>
      <Header label="Consulta de Leads" showButton />

      <Container></Container>

      <TableContainer>
        {leadsListData.length === 0 ? (
          <p>Nenhum lead cadastrado</p>
        ) : (
          <div>
            <ul>
              <li>Nome</li>
              <li>CPF</li>
              <li>E-mail</li>
              <li>Telefone</li>
              <li></li>
            </ul>
            {leadsListData.map((elem: LeadsListDataProps, index: number) => (
              <ul key={index}>
                <li>
                  <span>Nome:</span>
                  {elem.leadData.name}
                </li>
                <li>
                  <span>CPF:</span>
                  {elem.leadData.cpf}
                </li>
                <li>
                  <span>E-mail:</span>
                  {elem.leadData.email}
                </li>
                <li>
                  <span>Telefone:</span>
                  {elem.leadData.phone}
                </li>
                <li>
                  <MdOutlineModeEdit className="icoEdit" size={20} />
                  <LuTrash
                    className="icoRemove"
                    size={20}
                    onClick={() => {
                      axios
                        .delete(`${ENDPOINT_URL}/deleteLead/${elem.leadId}`)
                        .then(() => {
                          notify("info")
                          readLeads()
                        })
                        .catch((error) => {
                          console.error(error)
                        })
                    }}
                  />
                </li>
              </ul>
            ))}
          </div>
        )}
      </TableContainer>
    </Main>
  )
}

export default ReadLeads
