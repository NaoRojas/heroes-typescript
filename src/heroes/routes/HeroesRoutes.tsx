import { Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from '@/ui/Navbar'
import { MarvelPage } from '@/heroes/pages/MarvelPage'
import { DCPage } from '@/heroes/pages/DCPage'
import { LoginPage } from '@/auth/pages/LoginPage'
import { SearchDialog } from '../components/SearchDialog'
import { HeroPage } from '../components/HeroPage'

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DCPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="search" element={<SearchDialog />} />
        <Route path="hero/:id" element={<HeroPage />} />

        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  )
}
