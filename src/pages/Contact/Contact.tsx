import * as Yup from "yup"
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"

import {
  Main,
  Container,
  InputsContainer,
  ButtonsContainer,
} from "./ContactStyles"

import { InputMasked, InputText } from "../../components/inputs"
import {
  ErrorMessage,
  FormTitle,
  Header,
  LabelButton,
  StepCounter,
} from "../../components"

const Contact = (): JSX.Element => {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Campo obrigatório")
        .email("E-mail inválido"),
      phone: Yup.string()
        .required("Campo obrigatório")
        .min(15, "Telefone inválido"),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2))
    },
    validateOnBlur: true,
  })

  return (
    <Main>
      <Header label="Cadastro de Leads" />

      <Container>
        <StepCounter />

        <FormTitle />

        <form onSubmit={formik.handleSubmit}>
          <InputsContainer>
            <div>
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
            </div>

            <div>
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
              label="Cadastrar"
              disabled={!(formik.isValid && formik.dirty)}
              onClick={() => null}
            />
          </ButtonsContainer>
        </form>
      </Container>
    </Main>
  )
}

export default Contact
