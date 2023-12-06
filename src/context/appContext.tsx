import { Id, toast } from "react-toastify"
import { createContext, ReactNode, useContext, useState } from "react"

import { DatabaseMemory } from "../database-memory.js"

type AppContextProps = {
  databaseMemory: any
  leadUpdateData: LeadDataProps
  setLeadUpdateData: React.Dispatch<LeadDataProps>
  personalData: PersonalDataProps
  setPersonalData: React.Dispatch<PersonalDataProps>
  notify: (type: "success" | "info" | "update") => Id
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

type LeadDataProps = {
  leadData: {
    cpf: string
    name: string
    maritalStatus: string
    spouseName: string
    email: string
    phone: string
  }
  leadId: string
}

const AppContext = createContext<AppContextProps | undefined>(undefined)

export const AppContextProvider = ({
  children,
}: AppContextProviderProps): JSX.Element => {
  const databaseMemory = new DatabaseMemory()

  const [leadUpdateData, setLeadUpdateData] = useState<LeadDataProps>(null)
  const [personalData, setPersonalData] = useState<PersonalDataProps>(null)

  const notify = (type: "success" | "info" | "update") => {
    return type === "success" || type === "update"
      ? toast.success(
          `Lead ${
            type === "update" ? "atualizado" : "cadastrado"
          } com sucesso!`,
          {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        )
      : toast.info("Lead removido com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
  }

  return (
    <AppContext.Provider
      value={{
        databaseMemory,
        leadUpdateData,
        setLeadUpdateData,
        personalData,
        setPersonalData,
        notify,
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
