import React, { useState } from 'react'
import styled from 'styled-components';
import Button from './Button'
import Ripple from './Ripple';

const StyledRipple = styled(Ripple)``

const StyledButton = styled(Button)`
  position: relative;
  width: 150px;
  height: 45px;
  overflow: hidden;
  margin-top: 40px;
`

let i = 0;
const RippleButton = ({text, onClickHook}) => {
  const buttonRef = React.createRef()
  const [circles, setCircles] = useState([])
  
  const onClick = ({clientX, clientY}) => {
    const {width, left, top} = buttonRef.current.getBoundingClientRect()
    const circleSize = Math.floor(width*2)
    const circleStyle = {
      width: circleSize+'px',
      height: circleSize+'px',
      left: clientX - left - (circleSize/2),
      top: clientY - top - (circleSize/2)
    }

    setCircles(prev => [...prev, {count: ++i, style: circleStyle}])
    setTimeout(setCircles, 500, prev => prev.slice(1))

    typeof onClickHook === 'function' && onClickHook()
  }
  return <StyledButton ref={buttonRef} onClick={onClick} textColor="#fff" bgColor="#3f51b5">
    {text}
    {circles.map(({count, style}) => <StyledRipple key={`ripple-${count}`} style={style} />)}
  </StyledButton>
}

export default RippleButton