import * as yup from "yup"
import { useFormik } from "formik"
import { cpf } from "cpf-cnpj-validator"

import { Main, Container } from "./PersonalDataStyles"

import { InputCpf } from "../../components/inputs"
import { ErrorMessage, FormTitle, Header, StepCounter } from "../../components"

const PersonalData = (): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      cpf: "",
    },
    validationSchema: yup.object({
      cpf: yup
        .string()
        .required("Este campo é obrigatório")
        .test("isValid", "CPF Inválido", (value) => cpf.isValid(value)),
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
        <StepCounter firstStep />

        <FormTitle personalData />

        <form onSubmit={formik.handleSubmit}>
          <InputCpf
            id="cpf"
            type="text"
            name="cpf"
            value={formik.values.cpf}
            onChange={formik.setFieldValue}
            onBlur={formik.handleBlur}
          />
          {formik.touched.cpf && formik.errors.cpf && (
            <ErrorMessage message={formik.errors.cpf} />
          )}
        </form>
      </Container>
    </Main>
  )
}

export default PersonalData
