import * as yup from "yup"
import { useFormik } from "formik"
// import { cpf } from "cpf-cnpj-validator"
// import { BsExclamationOctagon } from "react-icons/bs"

import {
  ButtonsContainer,
  FilterContainer,
  // ErrorMessage,
  InputsContainer,
} from "./FilterStyles"

import { InputCpf, InputText, LabelButton } from "../../components"

const Filter = (): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      cpf: "",
      name: "",
    },
    validationSchema: yup.object({
      cpf: yup.string(),
      // .required("Este campo é obrigatório")
      // .test("isValid", "CPF Inválido", (value) => cpf.isValid(value)),
      name: yup.string(),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <FilterContainer>
      <form onSubmit={formik.handleSubmit}>
        <InputsContainer>
          <div>
            <InputCpf
              id="cpf"
              type="text"
              name="cpf"
              value={formik.values.cpf}
              setValue={formik.setFieldValue}
            />
            {/* {formik.touched.cpf && formik.errors.cpf && (
              <ErrorMessage>
                <BsExclamationOctagon />
                <label>{formik.errors.cpf}</label>
              </ErrorMessage>
            )} */}
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
          </div>
        </InputsContainer>

        <ButtonsContainer>
          <LabelButton
            type="button"
            appearance="secondary"
            label="Limpar tudo"
            onClick={() => {
              formik.setFieldValue("cpf", "")
              formik.setFieldValue("name", "")
            }}
          />

          <LabelButton
            type="submit"
            appearance="primary"
            label="Filtrar"
            onClick={() => null}
          />
        </ButtonsContainer>
      </form>
    </FilterContainer>
  )
}

export default Filter
