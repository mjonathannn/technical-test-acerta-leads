import { useNavigate } from "react-router-dom"

import { HeaderContainer, NavContainer } from "./HeaderStyles"

import { Button } from ".."

import AcertaLogo from "../../images/acerta_logo.svg"

type HeaderProps = {
  label: string
  showButton?: boolean
}

const Header = ({ label, showButton }: HeaderProps): JSX.Element => {
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <img src={AcertaLogo} alt="Acerta Logo" title="Acerta Logo" />

      <NavContainer>
        <h1>{label}</h1>

        {showButton && (
          <Button
            type="button"
            appearance="secondary"
            label="Novo lead"
            showIcon
            onClick={() => navigate("/personalData")}
          />
        )}
      </NavContainer>
    </HeaderContainer>
  )
}

export default Header
