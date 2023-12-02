import { useNavigate } from "react-router-dom"

import { HeaderContainer, NavContainer } from "./HeaderStyles"

import AcertaLogo from "../../images/acerta_logo.svg"
import { LabelButton } from ".."

type Props = {
  label: string
  showButton?: boolean
}

const Header = ({ label, showButton }: Props): JSX.Element => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/createLeads")
  }

  return (
    <HeaderContainer>
      <img src={AcertaLogo} alt="Acerta Logo" title="Acerta Logo" />

      <NavContainer>
        <h1>{label}</h1>

        {showButton && (
          <LabelButton
            type="button"
            appearance="secondary"
            label="Novo lead"
            showIcon
            onClick={() => handleClick()}
          />
        )}
      </NavContainer>
    </HeaderContainer>
  )
}

export default Header
