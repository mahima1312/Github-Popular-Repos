import './index.css'

const RepositoryItem = props => {
  const {repoDetails} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = repoDetails

  return (
    <li className="repository-item-container">
      <img className="avatar-img" src={avatarUrl} alt={name} />
      <h1 className="name">{name}</h1>

      <div className="counts-container">
        <div className="stars-fork-open-container">
          <img
            className="stars-fork-open"
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
          />
          <p>{starsCount} stars</p>
        </div>
        <div className="stars-fork-open-container">
          <img
            className="stars-fork-open"
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
          />
          <p>{forksCount} forks</p>
        </div>
        <div className="stars-fork-open-container">
          <img
            className="stars-fork-open"
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
          />
          <p>{issuesCount} open issues</p>
        </div>
      </div>
    </li>
  )
}
export default RepositoryItem
