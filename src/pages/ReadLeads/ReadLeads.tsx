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

import { Button, Header } from "../../components"
import { useAppContext } from "../../context/appContext"
import { InputMasked, InputText } from "../../components/inputs"

type LeadsDataProps = {
  cpf: string
  name: string
  maritalStatus: string
  spouseName: string
  email: string
  phone: string
  id: number
}

const ReadLeads = (): JSX.Element => {
  const navigate = useNavigate()

  const { setLeadData, notify } = useAppContext()

  const [withFilter, setWithFilter] = useState(false)
  const [leads, setLeads] = useState<LeadsDataProps[]>([])

  const handleReadLeads = () => {
    axios
      .get("http://localhost:3333/leads")
      .then((response) => {
        setLeads(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const handleDeleteLead = (leadId: number) => {
    axios
      .delete(`http://localhost:3333/leads/${leadId}`)
      .then(() => {
        handleReadLeads()
        notify("delete")
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const handleUpdateLead = (lead: LeadsDataProps) => {
    setLeadData(lead)
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
    setLeadData(null)
    handleReadLeads()
  }, [setLeadData])

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
        {leads.length === 0 ? (
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
            {leads
              .filter((elem: LeadsDataProps) =>
                withFilter
                  ? formik.values.cpf
                    ? formik.values.name
                      ? elem.cpf === formik.values.cpf &&
                        elem.name
                          .toLowerCase()
                          .includes(formik.values.name.toLowerCase())
                      : elem.cpf === formik.values.cpf
                    : formik.values.name
                    ? elem.name
                        .toLowerCase()
                        .includes(formik.values.name.toLowerCase())
                    : elem
                  : elem
              )
              .map((elem: LeadsDataProps, index: number) => (
                <ul key={index}>
                  <li>
                    <span>Nome:</span>
                    {elem.name}
                  </li>
                  <li>
                    <span>CPF:</span>
                    {elem.cpf}
                  </li>
                  <li>
                    <span>E-mail:</span>
                    {elem.email}
                  </li>
                  <li>
                    <span>Telefone:</span>
                    {elem.phone}
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
                      onClick={() => handleDeleteLead(elem.id)}
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
