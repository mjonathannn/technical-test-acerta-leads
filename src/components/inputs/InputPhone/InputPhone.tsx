import { Container, Title, Input } from "./InputPhoneStyles"

type Props = {
  id: string
  type: string
  name: string
  value: string
  onChange: any
  onBlur: any
}

const InputPhone = ({
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
      newValue = newValue.replace(/(\d{2})(\d)/, "($1) $2")
      newValue = newValue.replace(/(\d{5})(\d)/, "$1-$2")

      onChange(name, newValue)
    }
  }

  return (
    <Container>
      <Title>Telefone</Title>

      <Input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder="Digite o telefone do cliente"
        autoComplete="off"
        onChange={(event: any) => handleChange(event.target.value)}
        onBlur={onBlur}
      />
    </Container>
  )
}

export default InputPhone
