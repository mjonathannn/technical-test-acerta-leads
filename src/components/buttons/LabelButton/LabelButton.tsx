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
      <span>{label}</span>

      {showIcon && <IoAddSharp className="icon" />}
    </Button>
  )
}

export default LabelButton
