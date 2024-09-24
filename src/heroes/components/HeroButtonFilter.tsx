import { useFilter } from './FilterProvider'
export const HeroButtonFilter = ({ gradiendtColor, type }) => {
  const { filter, setFilter } = useFilter()
  const getHoverShadowClass = (gradiendtColor) => {
    switch (gradiendtColor) {
      case 'red-gradient':
        return 'hover-shadow-red-gradient'
      case 'purple-gradient':
        return 'hover-shadow-purple-gradient'
      case 'blue-gradient':
        return 'hover-shadow-blue-gradient'
      case 'pink-gradient':
        return 'hover-shadow-pink-gradient'
      case 'green-gradient':
        return 'hover-shadow-green-gradient'
      default:
        return ''
    }
  }

  const hoverShadowClass = getHoverShadowClass(gradiendtColor)

  return (
    <div
      className={`rounded-full p-2 hero-filter ${gradiendtColor} ${hoverShadowClass} ${
        type === filter ? 'filter-active' : ''
      }`}
      onClick={() => setFilter(type)}
    >
      <img className="w-12" src={`/src/images/icons/${type}.svg`} alt="" />
    </div>
  )
}
