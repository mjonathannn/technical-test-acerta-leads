import InputMask from "react-input-mask"

import { Container, Title } from "./InputMaskedStyles"

type InputMaskedProps = {
  id: string
  name: string
  value: string
  type: "CPF" | "Phone"
  onChange: any
  onBlur: any
}

const InputMasked = ({
  id,
  name,
  value,
  type,
  onChange,
  onBlur,
}: InputMaskedProps): JSX.Element => {
  const handleChange = (value: string) => {
    onChange(name, value)
  }

  return (
    <Container>
      <Title>{type === "Phone" ? "Telefone" : type}</Title>

      <InputMask
        id={id}
        name={name}
        value={value}
        placeholder={`Digite o ${
          type === "Phone" ? "telefone" : type
        } do cliente`}
        autoComplete="off"
        mask={type === "Phone" ? "(99) 99999-9999" : "999.999.999-99"}
        maskChar={null}
        onChange={(event: any) => handleChange(event.target.value)}
        onBlur={onBlur}
      />
    </Container>
  )
}

export default InputMasked
