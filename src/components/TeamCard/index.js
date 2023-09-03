// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {data} = props
  const {id, name, teamImageUrl} = data
  return (
    <Link to={`/team-matches/${id}`} className="link">
      <li className="each-team-container">
        <img src={teamImageUrl} alt={name} className="each-team-logo" />
        <p className="each-team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
