import { useNavigate } from 'react-router-dom'
export const HeroCard = ({ hero, publisher }) => {
  const navigate = useNavigate()
  return (
    <div
      className="hero-card"
      key={hero.id}
      onClick={() => {
        navigate(`/hero/${hero.id}`)
      }}
    >
      <img
        className="hero-image"
        src={`/src/images/heroes/${hero.id}.jpg`}
        alt=""
      />
      <div className="flex-col start hero-card-body">
        <h3 className="card-title primary-white text-start superhero">
          {hero.superhero}
        </h3>
        <h3 className="card-subtitle primary-silver">{hero.alter_ego}</h3>
      </div>
      <div className="overlay"></div>
    </div>
  )
}
