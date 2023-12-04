import { useNavigate } from "react-router-dom"
import { BsExclamationOctagon } from "react-icons/bs"

import {
  Main,
  Container,
  InputsContainer,
  ButtonsContainer,
  ErrorMessage,
} from "./ContactStyles"

import { useAppContext } from "../../context/appContext"
import { InputPhone, InputText } from "../../components/inputs"
import { FormTitle, Header, LabelButton, StepCounter } from "../../components"

const Contact = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <Main>
      <Header label="Cadastro de Leads" />

      <Container>
        <StepCounter />

        <FormTitle />

        {/* <form onSubmit={formik.handleSubmit}>
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
                <ErrorMessage>
                  <BsExclamationOctagon />
                  <span>{formik.errors.email}</span>
                </ErrorMessage>
              )}
            </div>

            <div>
              <InputPhone
                id="phone"
                type="text"
                name="phone"
                value={formik.values.phone}
                onChange={formik.setFieldValue}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phone && formik.errors.phone && (
                <ErrorMessage>
                  <BsExclamationOctagon />
                  <span>{formik.errors.phone}</span>
                </ErrorMessage>
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
        </form> */}
      </Container>
    </Main>
  )
}

export default Contact
