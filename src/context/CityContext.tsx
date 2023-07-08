import React, { createContext, useState } from 'react'
import CityResponse from '@/entities/CityResponse'

interface CityContextType {
  selectedCity?: CityResponse
  setSelectedCity: React.Dispatch<
    React.SetStateAction<CityResponse | undefined>
  >
}

export const CityContext = createContext<CityContextType>({
  selectedCity: undefined,
  setSelectedCity: () => {},
})

interface CityProviderProps {
  children: React.ReactNode
}

export default function CityProvider({ children }: CityProviderProps) {
  const [selectedCity, setSelectedCity] = useState<CityResponse | undefined>(
    undefined,
  )

  return (
    <CityContext.Provider value={{ selectedCity, setSelectedCity }}>
      {children}
    </CityContext.Provider>
  )
}
