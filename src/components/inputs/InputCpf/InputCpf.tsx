import { Container, Title, Input } from "./InputCpfStyles"

type Props = {
  id: string
  type: string
  name: string
  value: string
  setValue: any
}

const InputCpf = ({ id, type, name, value, setValue }: Props): JSX.Element => {
  const handleChange = (value: string) => {
    let newValue = value

    newValue = newValue.replace(/\D/g, "")

    if (newValue.length <= 11) {
      newValue = newValue.replace(/(\d{3})(\d)/, "$1.$2")
      newValue = newValue.replace(/(\d{3})(\d)/, "$1.$2")
      newValue = newValue.replace(/(\d{3})(\d)/, "$1-$2")

      setValue(name, newValue)
    }
  }

  return (
    <Container>
      <Title>CPF</Title>

      <Input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder="Digite o CPF do cliente"
        autoComplete="off"
        onChange={(event: any) => handleChange(event.target.value)}
      />
    </Container>
  )
}

export default InputCpf
