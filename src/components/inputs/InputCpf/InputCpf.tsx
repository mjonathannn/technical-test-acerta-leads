import { Container, Title, Input } from "./InputCpfStyles"

type Props = {
  id: string
  type: string
  name: string
  value: string
  onChange: any
  onBlur: any
}

const InputCpf = ({
  id,
  type,
  name,
  value,
  onChange,
  onBlur,
}: Props): JSX.Element => {
  const handleChange = (value: string) => {
    let newValue = value

    newValue = newValue.replace(/\D/g, "")

    if (newValue.length <= 11) {
      newValue = newValue.replace(/(\d{3})(\d)/, "$1.$2")
      newValue = newValue.replace(/(\d{3})(\d)/, "$1.$2")
      newValue = newValue.replace(/(\d{3})(\d)/, "$1-$2")

      onChange(name, newValue)
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
        onBlur={onBlur}
      />
    </Container>
  )
}

export default InputCpf
