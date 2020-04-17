import React from 'react'
import styled from 'styled-components'

const Message = styled.div`
  text-align: left;
  font-size: 13px;
  color: red;
  margin-top: 5px;
  padding-left: 12px;
`

const Feedback = ({feedback}) => <Message>{feedback}</Message> 

export default Feedback