import * as yup from "yup"
import { useFormik } from "formik"
import { createContext, ReactNode, useContext } from "react"

type Props = {
  children: ReactNode
}
type ContextType = {
  formik: any
}

const AppContext = createContext<ContextType | undefined>(undefined)

export const AppContextProvider = ({ children }: Props): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      cpf: "",
      name: "",
      maritalStatus: "",
      spouseName: "",
      email: "",
      phone: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .required("Este campo é obrigatório")
        .email("Este campo deve ter um e-mail válido"),
      phone: yup
        .string()
        .required("Este campo é obrigatório")
        .min(15, "Este campo deve ter um telefone válido"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
    validateOnBlur: true,
  })

  return (
    <AppContext.Provider
      value={{
        formik,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = (): ContextType => {
  const context = useContext(AppContext)
  return context as ContextType
}
