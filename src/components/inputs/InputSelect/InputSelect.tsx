import Select from "react-select"

import { InputSelectContainer, Title } from "./InputSelectStyles"

type InputSelectProps = {
  name: string
  title: string
  onChange: any
}

const InputSelect = ({
  name,
  title,
  onChange,
}: InputSelectProps): JSX.Element => {
  const handleChange = (value: string) => {
    onChange(name, value)
  }

  return (
    <InputSelectContainer>
      <Title>{title}</Title>

      <Select
        options={[
          { value: "solteiro(a)", label: "Solteiro(a)" },
          { value: "casado(a)", label: "Casado(a)" },
          { value: "viúvo(a)", label: "Viúvo(a)" },
          { value: "separado(a)", label: "Separado(a)" },
        ]}
        styles={{
          control: (base, props) => ({
            ...base,
            boxShadow: "none",
            padding: "0 0 0 5px",
            margin: "4px 0",
            height: "40px",
            border: props.isFocused
              ? "1px solid var(--primary-base)"
              : "1px solid var(--grey-lighter)",
            "&:hover": {
              border: "1px solid var(--primary-base)",
            },
            fontFamily: "Source Sans 3",
            "@media (max-width: 550px)": {
              padding: "0",
            },
          }),
          singleValue: (base, props) => ({
            ...base,
            fontFamily: "Source Sans 3",
          }),
          placeholder: (base, props) => ({
            ...base,
            color: "var(--grey-light)",
            fontFamily: "Source Sans 3",
          }),
          menu: (base, props) => ({
            ...base,
            "@media (max-width: 450px)": {
              marginTop: "0px",
            },
          }),
        }}
        placeholder="Selecione"
        onChange={(option: any) => {
          handleChange(option.value)
        }}
      />
    </InputSelectContainer>
  )
}

export default InputSelect
