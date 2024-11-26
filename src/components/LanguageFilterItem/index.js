import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, setActiveId, isActive} = props
  const {id, language} = languageDetails
  const onClickActiveId = () => {
    setActiveId(id)
  }

  const className = isActive ? 'active-btn' : 'btn'

  return (
    <li className="list-container">
      <button className={className} onClick={onClickActiveId} type="button">
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
