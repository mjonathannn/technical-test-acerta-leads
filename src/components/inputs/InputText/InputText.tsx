import { Container, Title, Input } from "./InputTextStyles"

type Props = {
  id: string
  type: string
  name: string
  title: string
  placeholder: string
  value: string
  setValue: any
}

const InputText = ({
  id,
  type,
  name,
  title,
  placeholder,
  value,
  setValue,
}: Props): JSX.Element => {
  const handleChange = (value: string) => {
    setValue(name, value)
  }

  return (
    <Container>
      <Title>{title}</Title>

      <Input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        autoComplete="off"
        onChange={(event: any) => handleChange(event.target.value)}
      />
    </Container>
  )
}

export default InputText
