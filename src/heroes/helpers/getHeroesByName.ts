import { heroes } from '@/heroes/data/heroes'

export const getHeroesByName = (name) => {
  return name === '' ? [] : heroes.filter((hero) => hero.superhero.toLowerCase() === name.toLowerCase());
}