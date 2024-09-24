import React, { createContext, useContext, useState } from 'react'

// Define the context type
interface FilterContextType {
  filter: string
  setFilter: (filter: string) => void
}

// Create the context
const FilterContext = createContext<FilterContextType | undefined>(undefined)

// Create the provider component
export const FilterProvider: React.FC = ({ children }) => {
  const [filter, setFilter] = useState<string>('Hero')

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  )
}

// Create a custom hook to use the context
export const useFilter = () => useContext(FilterContext)
