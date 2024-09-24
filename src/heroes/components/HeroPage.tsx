import { BookOpen, Book, Users, Video } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById'

export function HeroPage() {
  const { id, ...rest } = useParams()

  const hero = getHeroById(id)
  console.log(hero)
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }
  return (
    <div className="flex flex-row justify-center items-center mt-10">
      <Card className="w-1/2">
        <CardContent className="flex flex-row mt-8">
          <div className="flex">
            <img
              className="rounded-lg"
              src={`/src/images/heroes/${hero.id}.jpg`}
              alt=""
            />
          </div>
          <div className="flex flex-col w-full ml-8 items-center justify-center">
            <div className=" w-full flex items-center space-x-4 rounded-md border p-4 mb-8">
              <BookOpen />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  First Appareance
                </p>
                <p className="text-sm text-muted-foreground">
                  {hero.first_appearance}
                </p>
              </div>
            </div>
            <div className="w-full flex items-center space-x-4 rounded-md border p-4  mb-8">
              <Video />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">Publisher</p>
                <p className="text-sm text-muted-foreground">
                  {hero?.publisher}
                </p>
              </div>
            </div>
            <div className="w-full flex items-center space-x-4 rounded-md border p-4 mb-8">
              <Users />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">Characters</p>
                <p className="text-sm text-muted-foreground">
                  {hero?.characters}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => goBack()}>
            Back to Heroes
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
