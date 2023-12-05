import * as Yup from "yup"
import { useFormik } from "formik"
import { cpf } from "cpf-cnpj-validator"
import { useNavigate } from "react-router-dom"

import {
  Main,
  Container,
  InputsContainer,
  ButtonsContainer,
} from "./PersonalDataStyles"

import { useAppContext } from "../../context/appContext"
import { InputMasked, InputSelect, InputText } from "../../components/inputs"
import {
  ErrorMessage,
  FormTitle,
  Header,
  LabelButton,
  StepCounter,
} from "../../components"

const PersonalData = (): JSX.Element => {
  const navigate = useNavigate()

  const { setData } = useAppContext()

  const formik = useFormik({
    initialValues: {
      cpf: "",
      name: "",
      maritalStatus: "",
      spouse: "",
    },
    validationSchema: Yup.object().shape({
      cpf: Yup.string()
        .required("Campo obrigatório")
        .test("isValid", "CPF inválido", (value) => cpf.isValid(value)),
      name: Yup.string().required("Campo obrigatório"),
      maritalStatus: Yup.string().required("Campo obrigatório"),
      spouse: Yup.string().when("maritalStatus", ([maritalStatus], schema) => {
        if (maritalStatus === "casado(a)")
          return Yup.string().required("Campo obrigatório")
        return schema
      }),
    }),
    onSubmit: (values) => {
      setData(values)
      navigate("/contact")
      // alert(JSON.stringify(values, null, 2))
    },
    validateOnBlur: true,
  })

  return (
    <Main>
      <Header label="Cadastro de Leads" />

      <Container>
        <StepCounter firstStep />

        <FormTitle personalData />

        <form onSubmit={formik.handleSubmit}>
          <InputsContainer>
            <div>
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
            </div>

            <div>
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
            </div>
          </InputsContainer>

          <InputsContainer>
            <div>
              <InputSelect
                name="maritalStatus"
                title="Estado civil"
                onChange={formik.setFieldValue}
              />
              {formik.touched.maritalStatus && formik.errors.maritalStatus && (
                <ErrorMessage message={formik.errors.maritalStatus} />
              )}
            </div>

            <div>
              <InputText
                id="spouse"
                type="text"
                name="spouse"
                title="Nome do cônjuge"
                placeholder="Digite o nome do cônjuge"
                disabled={
                  formik.values.maritalStatus === "solteiro(a)" ||
                  formik.values.maritalStatus === ""
                }
                value={formik.values.spouse}
                onChange={formik.setFieldValue}
                onBlur={formik.handleBlur}
              />
              {formik.touched.spouse && formik.errors.spouse && (
                <ErrorMessage message={formik.errors.spouse} />
              )}
            </div>
          </InputsContainer>

          <ButtonsContainer>
            <LabelButton
              type="button"
              appearance="secondary"
              label="Cancelar"
              onClick={() => navigate("/")}
            />

            <LabelButton
              type="submit"
              appearance="primary"
              label="Avançar"
              disabled={!(formik.isValid && formik.dirty)}
              onClick={() => null}
            />
          </ButtonsContainer>
        </form>
      </Container>
    </Main>
  )
}

export default PersonalData
