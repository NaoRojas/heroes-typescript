import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { useNavigate } from 'react-router-dom'
import { useFilter } from '../components/FilterProvider'

export function HeroCarousel({ heroList = [] }) {
  const navigate = useNavigate()
  const { filter } = useFilter()
  console.log(heroList)
  const nameType = (name) => {
    switch (name) {
      case 'Hero':
        return 'Heroes'
      case 'Villain':
        return 'Villains'
      case 'Antihero':
        return 'Antiheroes'
      case 'Alien':
        return 'Aliens'
      case 'Human':
        return 'Humans'
    }
  }

  return (
    <div className="flex flex-col items-start ml-24">
      <h2 className="text-2xl font-bold mb-4">{nameType(filter)}</h2>
      <Carousel className="w-full max-w-4xl h-48 flex flex-row items-center justify-center mt-12">
        <CarouselContent className="-ml-1">
          {heroList.map((hero, index) => {
            return (
              <CarouselItem
                key={index}
                className="lg:basis-1/5 border-none"
                onClick={() => {
                  navigate(`/hero/${hero.id}`)
                }}
              >
                <Card key={index} className="border-none">
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-1 border-none">
                    <div className="p-33 flex flex-col items-center justify-end  text-white p-2 text-center">
                      <h3 className="text-sm primary-gray">{hero.superhero}</h3>
                    </div>
                    <img
                      className="rounded-2xl "
                      src={`/src/images/heroes/${hero.id}.jpg`}
                      alt=""
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
