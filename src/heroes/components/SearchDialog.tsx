import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { useForm } from '@/heroes/hooks/useForm'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { getHeroesByName } from '../helpers/getHeroesByName'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export const SearchDialog = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { q = '' } = queryString.parse(location.search)
  const heroes = getHeroesByName(q)
  const navigateToBack = () => {
    navigate(-1)
  }
  const { searchText, onInputChange } = useForm({
    searchText: '',
  })

  const onSearchSubmit = (e) => {
    e.preventDefault()
    console.log('search', searchText)
    if (searchText.trim() === '') {
      return
    }
    navigate(`?q=${searchText.toLowerCase().trim()}`)
  }

  return (
    <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg overflow-hidden p-0">
      <div
        className="flex h-full w-full flex-col overflow-hidden
      rounded-r-3xl
      bg-popover text-popover-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"
      >
        <div className="relative w-full max-w-screen-sm bg-background/95">
          <div className="flex items-center justify-between">
            <form onSubmit={onSearchSubmit} className="w-full">
              <Input
                type="text"
                style={{ borderEndStartRadius: 0, borderStartEndRadius: 0 }}
                placeholder="Search"
                name="searchText"
                value={searchText}
                onChange={onInputChange}
              />
            </form>

            <Button
              className="border-none absolute right-4 top-0  opacity-70  pr-1 pl-1  rounded-sm ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
              variant="outline"
              onClick={() => {
                navigateToBack()
              }}
            >
              x
            </Button>
          </div>

          <div className="flex flex-col items-start p-4">
            <small className="text-sm font-medium leading-none mb-3">
              Heroes
            </small>
            {heroes.length ? (
              heroes.map((hero) => {
                return (
                  <Button
                    className="w-full mt-1 justify-start border-none"
                    variant="outline"
                    onClick={() => {
                      navigate(`/hero/${hero.id}`)
                    }}
                  >
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarImage
                        src={`/src/images/heroes/${hero.id}.jpg`}
                        alt="@shadcn"
                      />
                    </Avatar>
                    {hero.superhero}
                  </Button>
                )
              })
            ) : (
              <small className="text-sm font-medium leading-none mt-3 pl-3">
                No heroes found with the name "{q}"
              </small>
            )}

            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}
