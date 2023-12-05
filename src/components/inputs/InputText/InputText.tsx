import { Container, Title, Input } from "./InputTextStyles"

type InputTextProps = {
  id: string
  type: string
  name: string
  title: string
  placeholder: string
  value: string
  disabled?: boolean
  onChange: any
  onBlur: any
}

const InputText = ({
  id,
  type,
  name,
  title,
  placeholder,
  value,
  disabled,
  onChange,
  onBlur,
}: InputTextProps): JSX.Element => {
  const handleChange = (value: string) => {
    onChange(name, value)
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
        disabled={disabled}
        onChange={(event: any) => handleChange(event.target.value)}
        onBlur={onBlur}
      />
    </Container>
  )
}

export default InputText
