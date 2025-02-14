// Write your code here
import {DirectionItems, LiItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {each, activeBtn, changeActiveBtn} = props
  const {value, directionId, displayText} = each

  const clickChange = () => {
    changeActiveBtn(value)
  }

  return (
    <LiItem>
      <DirectionItems
        value={value}
        onClick={clickChange}
        id={directionId}
        activeBtn={activeBtn}
      >
        {displayText}
      </DirectionItems>
    </LiItem>
  )
}
export default GradientDirectionItem