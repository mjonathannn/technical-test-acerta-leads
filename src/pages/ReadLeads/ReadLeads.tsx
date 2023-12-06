import axios from "axios"
import { useFormik } from "formik"
import { LuTrash } from "react-icons/lu"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { MdOutlineModeEdit } from "react-icons/md"

import {
  Main,
  FilterContainer,
  TableContainer,
  InputsRow,
  InputContainer,
  ButtonsContainer,
} from "./ReadLeadsStyle"

import { isRemoteHost } from "../../utils"
import { Button, Header } from "../../components"
import { useAppContext } from "../../context/appContext"
import { DATA_SOURCE, ENDPOINT_URL } from "../../constants/app"
import { InputMasked, InputText } from "../../components/inputs"

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

  const [withFilter, setWithFilter] = useState(false)
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

  const formik = useFormik({
    initialValues: {
      cpf: "",
      name: "",
    },
    onSubmit: () => setWithFilter(true),
  })

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

      <FilterContainer>
        <form onSubmit={formik.handleSubmit}>
          <InputsRow>
            <InputContainer>
              <InputMasked
                id="cpf"
                name="cpf"
                type="CPF"
                value={formik.values.cpf}
                onChange={formik.setFieldValue}
                onBlur={formik.handleBlur}
              />
            </InputContainer>
            <InputContainer>
              <InputText
                id="name"
                type="text"
                name="name"
                title="Nome do cliente"
                placeholder="Digite o nome do cliente"
                value={formik.values.name}
                onChange={formik.setFieldValue}
                onBlur={formik.handleBlur}
              />
            </InputContainer>
          </InputsRow>

          <ButtonsContainer>
            <Button
              type="button"
              appearance="secondary"
              label="Limpar tudo"
              onClick={() => {
                setWithFilter(false)
                formik.resetForm()
              }}
            />

            <Button
              type="submit"
              appearance="primary"
              label="Filtrar"
              onClick={() => null}
            />
          </ButtonsContainer>
        </form>
      </FilterContainer>

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
            {leadsListData
              .filter((elem: LeadsListDataProps) =>
                withFilter
                  ? formik.values.cpf
                    ? formik.values.name
                      ? elem.leadId === formik.values.cpf &&
                        elem.leadData.name
                          .toLowerCase()
                          .includes(formik.values.name.toLowerCase())
                      : elem.leadId === formik.values.cpf
                    : formik.values.name
                    ? elem.leadData.name
                        .toLowerCase()
                        .includes(formik.values.name.toLowerCase())
                    : elem
                  : elem
              )
              .map((elem: LeadsListDataProps, index: number) => (
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
