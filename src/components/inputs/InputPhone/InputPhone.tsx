import InputMask from "react-input-mask"

import { Container, Title } from "./InputPhoneStyles"

type InputPhoneProps = {
  id: string
  name: string
  value: string
  onChange: any
  onBlur: any
}

const InputPhone = ({
  id,
  name,
  value,
  onChange,
  onBlur,
}: InputPhoneProps): JSX.Element => {
  const handleChange = (value: string) => {
    onChange(name, value)
  }

  return (
    <Container>
      <Title>Telefone</Title>

      <InputMask
        id={id}
        name={name}
        value={value}
        placeholder="Digite o telefone do cliente"
        autoComplete="off"
        mask="(99) 99999-9999"
        maskChar={null}
        onChange={(event: any) => handleChange(event.target.value)}
        onBlur={onBlur}
      />
    </Container>
  )
}

export default InputPhone
