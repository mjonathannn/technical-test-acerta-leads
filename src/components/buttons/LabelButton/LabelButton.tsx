import { IoAddSharp } from "react-icons/io5"

import { Button } from "./LabelButtonStyles"

type Props = {
  type: "Primary" | "Secondary"
  label: string
  showIcon?: boolean
  handleClick: () => void
}

const LabelButton = ({ label, showIcon, handleClick }: Props): JSX.Element => {
  return (
    <Button onClick={() => handleClick()}>
      <label>{label}</label>

      {showIcon && <IoAddSharp />}
    </Button>
  )
}

export default LabelButton
