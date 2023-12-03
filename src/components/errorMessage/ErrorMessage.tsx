import { BsExclamationOctagon } from "react-icons/bs"

import { ErrorMessageContainer } from "./ErrorMessageStyles"

type Props = {
  message: string | undefined
}

const ErrorMessage = ({ message }: Props): JSX.Element => {
  return (
    <ErrorMessageContainer>
      <BsExclamationOctagon />
      <span>{message}</span>
    </ErrorMessageContainer>
  )
}

export default ErrorMessage
