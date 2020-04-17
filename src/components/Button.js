import React from 'react'
import styled from 'styled-components'

const DefaultButton = styled.button`
  display: inline-block;
  background-color: ${props => props.bgColor ? props.bgColor : 'transparent'};
  color: ${props => props.textColor ? props.textColor : '#333'};
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 18px;
  cursor: pointer;
`
const Button = React.forwardRef((props, ref) => <DefaultButton {...props} ref={ref}></DefaultButton>)

export default Button