import React from 'react'
import { FilterProvider } from './FilterContext'
import HeroButtonFilter from './HeroButtonFilter'

const App: React.FC = () => {
  return (
    <FilterProvider>
      <HeroButtonFilter gradiendtColor="red-gradient" type="hero" />
      {/* Other components */}
    </FilterProvider>
  )
}

export default App
