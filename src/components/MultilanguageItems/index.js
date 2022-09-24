import './index.css'

const MultiPage = props => {
  const {isActive, languagelist, setActiveLanguageFilterId} = props
  const {id, buttonText} = languagelist
  const activeClass = isActive ? 'button' : 'list'
  const onClickLanguageFilter = () => {
    setActiveLanguageFilterId(id)
  }

  return (
    <li>
      <button
        type="button"
        className={activeClass}
        onClick={onClickLanguageFilter}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default MultiPage
