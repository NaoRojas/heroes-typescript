import { heroes } from '@/heroes/data/heroes'
export const getHeroesByPublisher = (publisher, heroType = "") => {
  switch (publisher) {
    case 'DC Comics':
      return heroes?.filter((hero) => hero.publisher === 'DC Comics' && hero.type.includes(heroType.toLowerCase()));
    case 'Marvel Comics':
      return heroes?.filter((hero) => hero.publisher === 'Marvel Comics' && hero.type.includes(heroType.toLocaleLowerCase()));
    default:
      return [];
  }
}