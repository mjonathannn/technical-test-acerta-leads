import { BsExclamationOctagon } from "react-icons/bs"

import { ErrorMessageContainer } from "./ErrorMessageStyles"

type ErrorMessageProps = {
  message: string | undefined
}

const ErrorMessage = ({ message }: ErrorMessageProps): JSX.Element => {
  return (
    <ErrorMessageContainer>
      <BsExclamationOctagon />
      <span>{message}</span>
    </ErrorMessageContainer>
  )
}

export default ErrorMessage
