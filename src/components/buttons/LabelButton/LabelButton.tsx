import { IoAddSharp } from "react-icons/io5"

import { Button } from "./LabelButtonStyles"

type Props = {
  type: "button" | "submit"
  appearance: "primary" | "secondary"
  label: string
  icon?: boolean
  disabled?: boolean
  onClick: () => void
}

const LabelButton = ({
  type,
  appearance,
  label,
  icon,
  disabled,
  onClick,
}: Props): JSX.Element => {
  return (
    <Button
      type={type}
      appearance={appearance}
      disabled={disabled}
      onClick={() => onClick()}
    >
      <span>{label}</span>

      {icon && <IoAddSharp />}
    </Button>
  )
}

export default LabelButton
