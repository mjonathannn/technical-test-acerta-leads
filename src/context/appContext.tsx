import { Id, toast } from "react-toastify"
import { createContext, ReactNode, useContext, useState } from "react"

type AppContextProps = {
  leadData: LeadDataProps
  setLeadData: React.Dispatch<React.SetStateAction<LeadDataProps>>
  newLeadData: LeadDataProps
  setNewLeadData: React.Dispatch<React.SetStateAction<LeadDataProps>>
  notify: (type: "create" | "delete" | "update") => Id
}

type AppContextProviderProps = {
  children: ReactNode
}

type LeadDataProps = {
  cpf?: string
  name?: string
  maritalStatus?: string
  spouseName?: string
  email?: string
  phone?: string
  id?: number
}

const AppContext = createContext<AppContextProps | undefined>(undefined)

export const AppContextProvider = ({
  children,
}: AppContextProviderProps): JSX.Element => {
  const [leadData, setLeadData] = useState<LeadDataProps>(null)
  const [newLeadData, setNewLeadData] = useState<LeadDataProps>(null)

  const notify = (type: "create" | "delete" | "update") => {
    return toast.success(
      `Lead ${
        type === "update"
          ? "atualizado"
          : type === "delete"
          ? "removido"
          : "cadastrado"
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
  }

  return (
    <AppContext.Provider
      value={{
        leadData,
        setLeadData,
        newLeadData,
        setNewLeadData,
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
