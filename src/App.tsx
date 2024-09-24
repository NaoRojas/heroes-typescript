import './App.css'
import { Navbar } from './ui/Navbar'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routes/AppRouter'
import { FilterProvider } from './heroes/components/FilterProvider'

function App() {
  return (
    <BrowserRouter>
      <FilterProvider>
        <AppRouter />
      </FilterProvider>
    </BrowserRouter>
  )
}

export default App
