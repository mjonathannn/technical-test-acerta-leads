import axios from "axios"
import * as Yup from "yup"
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"

import {
  Main,
  Container,
  ButtonsContainer,
  InputsRow,
  InputContainer,
} from "../PersonalData/PersonalDataStyles"

import { useAppContext } from "../../context/appContext"
import { InputMasked, InputText } from "../../components/inputs"
import {
  Button,
  ErrorMessage,
  FormTitle,
  Header,
  StepCounter,
} from "../../components"

const Contact = (): JSX.Element => {
  const navigate = useNavigate()

  const { leadData, newLeadData, notify } = useAppContext()

  const handleSubmit = (values: any) => {
    if (leadData) {
      axios
        .put(
          `http://localhost:3333/leads/${leadData.id}`,
          {
            ...newLeadData,
            ...values,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(() => {
          notify("update")
          navigate("/")
        })
        .catch((error) => {
          console.error(error)
        })
    } else {
      axios
        .post(
          "http://localhost:3333/leads",
          {
            ...newLeadData,
            ...values,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(() => {
          notify("create")
          navigate("/")
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  const formik = useFormik({
    initialValues: {
      email: leadData ? leadData.email : "",
      phone: leadData ? leadData.phone : "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Campo obrigatório")
        .email("E-mail inválido"),
      phone: Yup.string()
        .required("Campo obrigatório")
        .min(15, "Telefone inválido"),
    }),
    onSubmit: (values) => handleSubmit(values),
    validateOnBlur: true,
  })

  return (
    <Main>
      <Header label={leadData ? "Atualizar Lead" : "Cadastro de Leads"} />

      <Container>
        <StepCounter />

        <FormTitle />

        <form onSubmit={formik.handleSubmit}>
          <InputsRow>
            <InputContainer>
              <InputText
                id="email"
                type="text"
                name="email"
                title="E-mail"
                placeholder="Digite o e-mail do cliente"
                value={formik.values.email}
                onChange={formik.setFieldValue}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <ErrorMessage message={formik.errors.email} />
              )}
            </InputContainer>

            <InputContainer>
              <InputMasked
                id="phone"
                name="phone"
                type="Phone"
                value={formik.values.phone}
                onChange={formik.setFieldValue}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phone && formik.errors.phone && (
                <ErrorMessage message={formik.errors.phone} />
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
              label={leadData ? "Atualizar" : "Cadastrar"}
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

export default Contact
