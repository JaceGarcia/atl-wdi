import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import { fadeOutRightBig } from 'react-animations';

const fadeOutRightBigAnimation = keyframes`${fadeOutRightBig}`;


const Button = styled.a`
  border-radius: 5px;
  padding: 15px 25px;
  font-size: 22px;
  text-decoration: none;
  margin: 20px;
  color: #fff;
  position: relative;
  display: inline-block;
  background-color: #55acee;
  box-shadow: 0px 5px 0px 0px #3C93D5;
  animation: ${fadeOutRightBigAnimation} .4s infinite;
  &:hover{
    background-color: #6FC6FF;
  }
  &:active{
    transform: translate(0px, 5px);
    box-shadow: 0px 1px 0px 0px;
  }
`;

const ErrorButton = Button.extend`
  background-color: #e74c3c;
  box-shadow: 0px 5px 0px 0px #CE3323;
  &:hover{
    background-color: #FF6656;
  }
`;

const SuccessButton = Button.extend`
  background-color: #2ecc71;
  box-shadow: 0px 5px 0px 0px #15B358;
  &:hover{
    background-color: #48E68B;
  }
`;

const InfoButton = Button.extend`
  background-color: #f1c40f;
  box-shadow: 0px 5px 0px 0px #D8AB00;
  &:hover{
    background-color: #FFDE29;
  }
`

class ClickMe extends Component {
  render() {
    return (
      <div>
        <Button>
          Normal
        </Button>
        <ErrorButton>
          Error
        </ErrorButton>
        <SuccessButton>
          Success
        </SuccessButton>
        <InfoButton>
          Info
        </InfoButton>
      </div>
    )
  }
}
export default ClickMe;
