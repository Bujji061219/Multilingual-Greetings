import './index.css'

const MultiIMage = props => {
  const {everyimage, isActive} = props
  const {imageUrl, imageAltText} = everyimage
  const isAc = isActive && imageUrl
  const Alt = isActive && imageAltText
  return <img src={isAc} alt={Alt} className="imh" />
}
export default MultiIMage
