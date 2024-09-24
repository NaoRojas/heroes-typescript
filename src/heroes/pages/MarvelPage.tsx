import marvel from '../../assets/marvel.svg'
import { HeroFilters } from '../components/HeroFilter'
import { HeroCarousel } from '../components/HeroCarousel'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import { FilterProvider, useFilter } from '../components/FilterProvider'

export const MarvelPage = () => {
  const { filter } = useFilter()

  return (
    <div className="body-content p-12">
      <div className="flex items-center justify-center">
        <img src={marvel} className="logo" alt="React logo" />
      </div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Welcome to the Marvel Universe
      </h1>
      <h1 className="leading-7 [&:not(:first-child)]:mt-6">
        Choose your favorite Marvel character
      </h1>
      <HeroFilters />
      <HeroCarousel heroList={getHeroesByPublisher('Marvel Comics', filter)} />
    </div>
  )
}
