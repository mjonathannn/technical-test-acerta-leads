import { IoAddSharp } from "react-icons/io5"

import { ButtonStyled } from "./ButtonStyles"

type ButtonProps = {
  type: "button" | "submit"
  appearance: "primary" | "secondary"
  label: string
  showIcon?: boolean
  disabled?: boolean
  onClick: () => void
}

const Button = ({
  type,
  appearance,
  label,
  showIcon,
  disabled,
  onClick,
}: ButtonProps): JSX.Element => {
  const handleClick = () => {
    onClick()
  }

  return (
    <ButtonStyled
      type={type}
      appearance={appearance}
      disabled={disabled}
      onClick={handleClick}
    >
      <span>{label}</span>

      {showIcon && <IoAddSharp />}
    </ButtonStyled>
  )
}

export default Button
