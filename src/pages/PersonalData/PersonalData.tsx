import * as Yup from "yup"
import { useFormik } from "formik"
import { cpf } from "cpf-cnpj-validator"
import { useNavigate } from "react-router-dom"

import {
  Main,
  Container,
  ButtonsContainer,
  InputsRow,
  InputContainer,
} from "./PersonalDataStyles"

import { useAppContext } from "../../context/appContext"
import { InputMasked, InputSelect, InputText } from "../../components/inputs"
import {
  Button,
  ErrorMessage,
  FormTitle,
  Header,
  StepCounter,
} from "../../components"

const PersonalData = (): JSX.Element => {
  const navigate = useNavigate()

  const { leadData, setNewLeadData } = useAppContext()

  const formik = useFormik({
    initialValues: {
      cpf: leadData ? leadData.cpf : "",
      name: leadData ? leadData.name : "",
      maritalStatus: leadData ? leadData.maritalStatus : "",
      spouseName: leadData ? leadData.spouseName : "",
    },
    validationSchema: Yup.object().shape({
      cpf: Yup.string()
        .required("Campo obrigatório")
        .test("isValid", "CPF inválido", (value) => cpf.isValid(value)),
      name: Yup.string().required("Campo obrigatório"),
      maritalStatus: Yup.string().required("Campo obrigatório"),
      spouseName: Yup.string().when(
        "maritalStatus",
        ([maritalStatus], schema) => {
          if (maritalStatus === "casado(a)")
            return Yup.string().required("Campo obrigatório")
          return schema
        }
      ),
    }),
    onSubmit: (values) => {
      setNewLeadData(values)
      navigate("/contact")
    },
    validateOnBlur: true,
  })

  return (
    <Main>
      <Header label={leadData ? "Atualizar Lead" : "Cadastro de Leads"} />

      <Container>
        <StepCounter firstStep />

        <FormTitle personalData />

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
              {formik.touched.cpf && formik.errors.cpf && (
                <ErrorMessage message={formik.errors.cpf} />
              )}
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
              {formik.touched.name && formik.errors.name && (
                <ErrorMessage message={formik.errors.name} />
              )}
            </InputContainer>
          </InputsRow>

          <InputsRow>
            <InputContainer>
              <InputSelect
                name="maritalStatus"
                title="Estado civil"
                value={leadData ? leadData.maritalStatus : ""}
                onChange={formik.setFieldValue}
              />
              {formik.touched.maritalStatus && formik.errors.maritalStatus && (
                <ErrorMessage message={formik.errors.maritalStatus} />
              )}
            </InputContainer>

            <InputContainer>
              <InputText
                id="spouseName"
                type="text"
                name="spouseName"
                title="Nome do cônjuge"
                placeholder="Digite o nome do cônjuge"
                disabled={!(formik.values.maritalStatus === "casado(a)")}
                value={formik.values.spouseName}
                onChange={formik.setFieldValue}
                onBlur={formik.handleBlur}
              />
              {formik.touched.spouseName && formik.errors.spouseName && (
                <ErrorMessage message={formik.errors.spouseName} />
              )}
            </InputContainer>
          </InputsRow>

          <ButtonsContainer>
            <Button
              type="button"
              appearance="secondary"
              label="Cancelar"
              onClick={() => navigate("/")}
            />

            <Button
              type="submit"
              appearance="primary"
              label="Avançar"
              disabled={
                leadData ? !formik.isValid : !(formik.isValid && formik.dirty)
              }
              onClick={() => null}
            />
          </ButtonsContainer>
        </form>
      </Container>
    </Main>
  )
}

export default PersonalData
