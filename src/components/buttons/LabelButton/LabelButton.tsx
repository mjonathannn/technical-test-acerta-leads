import { IoAddSharp } from "react-icons/io5"

import { Button } from "./LabelButtonStyles"

type Props = {
  type: "button" | "submit" | "reset"
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
}: Props): JSX.Element => {
  return (
    <Button type={type} appearance={appearance} onClick={() => onClick()}>
      <span>{label}</span>

      {showIcon && <IoAddSharp />}
    </Button>
  )
}

export default LabelButton
