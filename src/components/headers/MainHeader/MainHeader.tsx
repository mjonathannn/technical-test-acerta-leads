import { Header } from "./MainHeaderStyles"

import AcertaLogo from "../../../images/acerta_logo.svg"

const MainHeader = (): JSX.Element => {
  return (
    <Header>
      <img src={AcertaLogo} alt="Acerta Logo" />
    </Header>
  )
}

export default MainHeader
