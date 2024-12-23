import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  BgCon,
  GeneratorHeading,
  DirectionHeading,
  DivCon,
  PickColors,
  ColorCon,
  FirstColorHeading,
  Input,
  InternalCon,
  GenerateBtn,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeBtn: gradientDirectionsList[0].value,
    color1: '#014f7b',
    color2: '#8ae323',
    actualColors: {tempColor1: '#014f7b', tempColor2: '#8ae323'},
  }

  changeActiveBtn = id => {
    this.setState({activeBtn: id})
  }

  changeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  changeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  generateBtn = () => {
    const {color1, color2} = this.state
    this.setState({actualColors: {tempColor1: color1, tempColor2: color2}})
  }

  render() {
    const {activeBtn, actualColors, color1, color2} = this.state
    const {tempColor1, tempColor2} = actualColors
    console.log(activeBtn)
    return (
      <BgCon
        direction={activeBtn}
        data-testid="gradientGenerator"
        col1={tempColor1}
        col2={tempColor2}
      >
        <GeneratorHeading>Generate a CSS Color Gradient</GeneratorHeading>
        <DirectionHeading>Choose Direction</DirectionHeading>
        <DivCon>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              each={each}
              activeBtn={activeBtn === each.value}
              changeActiveBtn={this.changeActiveBtn}
            />
          ))}
        </DivCon>
        <PickColors>Pick the Colors</PickColors>
        <ColorCon>
          <InternalCon>
            <FirstColorHeading>{color1}</FirstColorHeading>
            <Input type="color" value={color1} onChange={this.changeColor1} />
          </InternalCon>
          <InternalCon>
            <FirstColorHeading>{color2}</FirstColorHeading>
            <Input type="color" value={color2} onChange={this.changeColor2} />
          </InternalCon>
        </ColorCon>
        <GenerateBtn onClick={this.generateBtn}>Generate</GenerateBtn>
      </BgCon>
    )
  }
}

export default GradientGenerator