import { IoAddSharp } from "react-icons/io5"

import { Button } from "./LabelButtonStyles"

type LabelButtonProps = {
  type: "button" | "submit"
  appearance: "primary" | "secondary"
  label: string
  showIcon?: boolean
  disabled?: boolean
  onClick: () => void
}

const LabelButton = ({
  type,
  appearance,
  label,
  showIcon,
  disabled,
  onClick,
}: LabelButtonProps): JSX.Element => {
  const handleClick = () => {
    onClick()
  }

  return (
    <Button
      type={type}
      appearance={appearance}
      disabled={disabled}
      onClick={handleClick}
    >
      <span>{label}</span>

      {showIcon && <IoAddSharp />}
    </Button>
  )
}

export default LabelButton
