import { HeroFilters } from '../components/HeroFilter'
import { HeroCarousel } from '../components/HeroCarousel'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import dc from '../../assets/dc.png'
import { FilterProvider, useFilter } from '../components/FilterProvider'

export const DCPage = () => {
  const { filter } = useFilter()

  return (
    <div className="body-content p-12">
      <div className="flex items-center justify-center">
        <img
          src={dc}
          className="logo"
          alt="React logo"
          style={{ filter: 'invert(1)', width: '120px', height: '120px' }}
        />
      </div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Welcome to the DC Universe
      </h1>
      <h1 className="leading-7 [&:not(:first-child)]:mt-6">
        Choose your favorite DC character
      </h1>
      <HeroFilters />
      <HeroCarousel heroList={getHeroesByPublisher('DC Comics', filter)} />
    </div>
  )
}
