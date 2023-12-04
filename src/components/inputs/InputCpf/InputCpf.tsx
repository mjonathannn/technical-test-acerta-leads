import InputMask from "react-input-mask"

import { Container, Title } from "./InputCpfStyles"

type InputCpfProps = {
  id: string
  name: string
  value: string
  onChange: any
  onBlur: any
}

const InputCpf = ({
  id,
  name,
  value,
  onChange,
  onBlur,
}: InputCpfProps): JSX.Element => {
  return (
    <Container>
      <Title>CPF</Title>

      <InputMask
        id={id}
        name={name}
        value={value}
        placeholder="Digite o CPF do cliente"
        autoComplete="off"
        mask="999.999.999-99"
        maskChar={null}
        onChange={(event: any) => onChange(name, event.target.value)}
        onBlur={onBlur}
      />
    </Container>
  )
}

export default InputCpf
