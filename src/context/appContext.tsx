import { createContext, ReactNode, useContext, useState } from "react"

type AppContextProps = {
  personalData: PersonalDataProps
  setPersonalData: React.Dispatch<PersonalDataProps>
}

type AppContextProviderProps = {
  children: ReactNode
}

type PersonalDataProps = {
  cpf?: string
  name?: string
  maritalStatus?: string
  spouseName?: string
  email?: string
  phone?: string
}

const AppContext = createContext<AppContextProps | undefined>(undefined)

export const AppContextProvider = ({
  children,
}: AppContextProviderProps): JSX.Element => {
  const [personalData, setPersonalData] = useState<PersonalDataProps>(null)

  return (
    <AppContext.Provider
      value={{
        personalData,
        setPersonalData,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error("useAppContext must be used inside a AppContextProvider")
  }

  return context
}
