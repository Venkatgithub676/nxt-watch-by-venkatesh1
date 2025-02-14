// Style your elements here

import styled from 'styled-components'

export const BgCon = styled.div`
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.col2},
    ${props => props.col1}
  );
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 50px 20px 50px;
`
export const GeneratorHeading = styled.h1`
  font-family: Roboto;
  font-size: 30px;
  color: #ffffff;
`

export const DirectionHeading = styled.p`
  color: #ededed;
  font-size: 20px;
  font-family: Roboto;
`

export const DivCon = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const PickColors = styled.p`
  font-family: Roboto;
  color: #ededed;
  font-size: 25px;
  margin-top: 40px;
`
export const ColorCon = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const InternalCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`

export const FirstColorHeading = styled.p`
  font-family: Roboto;
  font-size: 20px;
  color: #ffffff;
`
export const Input = styled.input`
  width: 40%;
  border: none;
  background-color: transparent;
  height: 50px;
`

export const GenerateBtn = styled.button`
  background-color: #00c9b7;
  width: 150px;
  height: 40px;
  font-family: Roboto;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  margin-top: 30px;
`