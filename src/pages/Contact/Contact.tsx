import { useNavigate } from "react-router-dom"
import { MdOutlinePhone } from "react-icons/md"
import { BsExclamationOctagon } from "react-icons/bs"

import {
  Main,
  Container,
  StepCounterContainer,
  ImageContainer,
  Line,
  FormHeaderContainer,
  InputsContainer,
  ButtonsContainer,
  ErrorMessage,
} from "./ContactStyles"

import { useAppContext } from "../../context/appContext"
import { Header, InputText, LabelButton } from "../../components"
import FirstStepFinished from "../../images/first_step_finished.svg"
import SecondStepCurrent from "../../images/second_step_current.svg"

const Contact = (): JSX.Element => {
  const navigate = useNavigate()
  const { formik } = useAppContext()

  return (
    <Main>
      <Header label="Cadastro de Leads" />

      <Container>
        <StepCounterContainer>
          <ImageContainer>
            <img
              src={FirstStepFinished}
              alt="First Step Finished"
              title="First Step Finished"
            />

            <span>Dados pessoais</span>
          </ImageContainer>

          <Line />

          <ImageContainer>
            <img
              src={SecondStepCurrent}
              alt="Second Step Current"
              title="Second Step Current"
            />

            <span>Contato</span>
          </ImageContainer>
        </StepCounterContainer>

        <FormHeaderContainer>
          <MdOutlinePhone size={30} />
          <h1>Contato</h1>
        </FormHeaderContainer>

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
                setValue={formik.setFieldValue}
              />
              {formik.touched.email && formik.errors.email && (
                <ErrorMessage>
                  <BsExclamationOctagon />
                  <span>{formik.errors.email}</span>
                </ErrorMessage>
              )}
            </div>

            <InputText
              id="phone"
              type="text"
              name="phone"
              title="Telefone"
              placeholder="Digite o telefone do cliente"
              value={formik.values.phone}
              setValue={formik.setFieldValue}
            />
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
              onClick={() => null}
            />
          </ButtonsContainer>
        </form>
      </Container>
    </Main>
  )
}

export default Contact
