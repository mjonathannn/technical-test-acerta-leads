import { createContext, ReactNode, useContext, useState } from "react"

type AppContextData = {
  data: any
  setData: React.Dispatch<React.SetStateAction<any>>
}

type AppContextProviderProps = {
  children: ReactNode
}

const AppContext = createContext<AppContextData | undefined>(undefined)

export const AppContextProvider = ({
  children,
}: AppContextProviderProps): JSX.Element => {
  const [data, setData] = useState<any>(null)

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = (): AppContextData => {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error("useAppContext must be used inside a AppContextProvider")
  }

  return context
}
