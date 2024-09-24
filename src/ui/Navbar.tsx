import { Button } from '@/components/ui/button'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export function Navbar() {
  const navigate = useNavigate()
  const [openSearch, setOpenSearch] = useState(false)

  const navigateToSearch = () => {
    setOpenSearch(true)
    navigate('/search')
  }
  return (
    <div className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 max-w-screen-2xl items-center p-8">
        <div className="flex items-center gap-4 text-sm lg:gap-6">
          <NavLink
            to="/marvel"
            className={
              'flex items-center text-sm font-medium text-muted-foreground'
            }
          >
            Marvel
          </NavLink>
          <NavLink
            to="/dc"
            className={
              'flex items-center text-sm font-medium text-muted-foreground'
            }
          >
            DC
          </NavLink>
          <NavLink
            to="/search"
            className={
              'flex items-center text-sm font-medium text-muted-foreground'
            }
          >
            Search
          </NavLink>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button
              className="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input 
            hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
              onClick={() => navigateToSearch()}
            >
              Search
              <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
          </div>

          <NavLink to="/login" className="flex">
            <Button className="rounded-[0.5rem]">Logout</Button>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}
