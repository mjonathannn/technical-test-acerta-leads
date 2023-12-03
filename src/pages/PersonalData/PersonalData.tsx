import * as yup from "yup"
import { useFormik } from "formik"
import { cpf } from "cpf-cnpj-validator"

import { Main, Container } from "./PersonalDataStyles"

import { InputCpf, InputText } from "../../components/inputs"
import { ErrorMessage, FormTitle, Header, StepCounter } from "../../components"

const PersonalData = (): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      cpf: "",
      name: "",
    },
    validationSchema: yup.object({
      cpf: yup
        .string()
        .required("Este campo é obrigatório")
        .test("isValid", "CPF Inválido", (value) => cpf.isValid(value)),
      name: yup.string().required("Este campo é obrigatório"),
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
        </form>
      </Container>
    </Main>
  )
}

export default PersonalData
