// Style your elements here
import styled from 'styled-components'

export const LiItem = styled.li`
  width: 48%;
  margin-right: 5px;
  margin-bottom: 5px;
  @media screen and (min-width: 768px) {
    width: 24%;
  }
`

export const DirectionItems = styled.button`
  border-radius: 10px;
  border: none;
  height: 40px;
  width: 100%;
  font-weight: bold;
  font-family: 'Roboto';
  cursor: pointer;
  opacity: ${props => (props.activeBtn ? 1 : 0.5)};
`