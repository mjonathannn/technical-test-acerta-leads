import axios from "axios"
import { LuTrash } from "react-icons/lu"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { MdOutlineModeEdit } from "react-icons/md"

import { Main, FilterContainer, TableContainer } from "./ReadLeadsStyle"

import { Header } from "../../components"
import { isRemoteHost } from "../../utils"
import { useAppContext } from "../../context/appContext"
import { DATA_SOURCE, ENDPOINT_URL } from "../../constants/app"

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
  const navigate = useNavigate()

  const [leadsListData, setLeadsListData] = useState<LeadsListDataProps[]>([])

  const { databaseMemory, setLeadUpdateData, notify } = useAppContext()

  const handleReadLeads = () => {
    axios
      .get(`${ENDPOINT_URL}/readLeads`)
      .then(({ data }) => {
        setLeadsListData(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const handleDeleteLead = (leadId: string) => {
    if (isRemoteHost() || DATA_SOURCE === "DATABASE_MEMORY") {
      databaseMemory.delete(leadId)
      notify("info")
      setLeadsListData(databaseMemory.list())
    } else {
      axios
        .delete(`${ENDPOINT_URL}/deleteLead/${leadId}`)
        .then(() => {
          notify("info")
          handleReadLeads()
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  const handleUpdateLead = (lead: LeadsListDataProps) => {
    setLeadUpdateData(lead)
    navigate("/personalData")
  }

  useEffect(() => {
    setLeadUpdateData(null)

    if (isRemoteHost() || DATA_SOURCE === "DATABASE_MEMORY") {
      setLeadsListData(databaseMemory.list())
    } else {
      handleReadLeads()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Main>
      <Header label="Consulta de Leads" showButton />

      <FilterContainer>Filtro</FilterContainer>

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
                  <MdOutlineModeEdit
                    className="icoEdit"
                    size={20}
                    onClick={() => handleUpdateLead(elem)}
                  />
                  <LuTrash
                    className="icoRemove"
                    size={20}
                    onClick={() => handleDeleteLead(elem.leadId)}
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
