import { IoAddSharp } from "react-icons/io5"

import { Button } from "./NewLeadButtonStyles"

type Props = {
  handleClick: () => void
}

const NewLeadButton = ({ handleClick }: Props): JSX.Element => {
  return (
    <Button onClick={() => handleClick()}>
      <span>Novo Lead</span>

      <IoAddSharp className="icon" />
    </Button>
  )
}

export default NewLeadButton
