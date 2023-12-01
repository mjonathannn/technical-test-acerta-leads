import { IoAddSharp } from "react-icons/io5"

import { Button } from "./LabelButtonStyles"

type Props = {
  type: "button" | "submit" | "reset" | undefined
  appearance: "Primary" | "Secondary"
  label: string
  showIcon?: boolean
  onClick: () => void
}

const LabelButton = ({
  type,
  appearance,
  label,
  showIcon,
  onClick,
}: Props): JSX.Element => {
  return (
    <Button type={type} appearance={appearance} onClick={() => onClick()}>
      <label>{label}</label>

      {showIcon && <IoAddSharp />}
    </Button>
  )
}

export default LabelButton
