import { createContext, useContext, useState } from "react"
import { MedicalOfficeType } from "@/types"

type MoProviderProps = {
  children: React.ReactNode
  storageKey?: string
}

type MoProviderState = {
  medicalOffice: MedicalOfficeType
  setMedicalOffice: (mo: MedicalOfficeType) => void
}

const initialState: MoProviderState = {
  medicalOffice: {
    id: 0,
    name: "",
  },
  setMedicalOffice: () => null,
}

const MoProviderContext = createContext<MoProviderState>(initialState)

export function MoProvider({
  children,
  storageKey = "vite-mo-selected",
  ...props
}: MoProviderProps) {
  const [medicalOffice, setMedicalOffice] = useState<MedicalOfficeType>(
    () => {
      let data = JSON.parse(localStorage.getItem(storageKey) as string)

      return data || {}
    }
  )

  const value = {
    medicalOffice,
    setMedicalOffice: (mo: MedicalOfficeType) => {
      localStorage.setItem(storageKey, JSON.stringify(mo))
      setMedicalOffice(mo)
    },
  }

  return (
    <MoProviderContext.Provider {...props} value={value}>
      {children}
    </MoProviderContext.Provider>
  )
}

export const useMo = () => {
  const context = useContext(MoProviderContext)

  if (context === undefined)
    throw new Error("useMo must be used within a MoProvider")

  return context
}
