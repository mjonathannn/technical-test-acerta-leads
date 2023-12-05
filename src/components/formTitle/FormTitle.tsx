import { FaRegUser } from "react-icons/fa"
import { MdOutlinePhone } from "react-icons/md"

import { FormTitleContainer } from "./FormTitleStyles"

type FormTitleProps = {
  personalData?: boolean
}

const FormTitle = ({ personalData }: FormTitleProps): JSX.Element => {
  return (
    <FormTitleContainer>
      {personalData ? (
        <>
          <FaRegUser size={20} />
          <h1>Dados pessoais</h1>
        </>
      ) : (
        <>
          <MdOutlinePhone size={20} />
          <h1>Contato</h1>
        </>
      )}
    </FormTitleContainer>
  )
}

export default FormTitle
