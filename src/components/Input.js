import React from 'react'
import styled from 'styled-components'

const DefaultInput = styled.input`
  display: inline-block;
  padding: 10px 12px;
  height: 45px;
  border: 1px solid #eaeaea;
  background-color: #fff;
  outline: none;
  border-radius: 5px;
  font-size: 14px;
  &:focus {
    border-color: #666;
  }
`
const Input = (props) => <DefaultInput {...props} autoComplete="off" />

export default Input