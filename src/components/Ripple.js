import React from 'react'
import styled, { keyframes } from 'styled-components'

const circleKeyFrame = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }
`
const Span = styled.span`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  border-radius: 100%;
  background-color: rgba(255,255,255,0.25);
  transform: scale(0);
  opacity: 0;
  transform-origin: center;
  animation: ${circleKeyFrame} 0.6s;
`

const Ripple = (props) => <Span {...props} />

export default Ripple