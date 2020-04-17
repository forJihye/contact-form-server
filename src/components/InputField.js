import React from 'react'
import Input from './Input'
import { withFormContext } from './FormContext'
import Feedback from './Feedback'
import styled from 'styled-components'

const StyledField = styled.div`
  margin-bottom: 20px;
  input {
    width: 100%
  }
`
const InputField = ({type, name, placeholder, feedback, invalid, setInvalid, validate}) => {
  return <StyledField>
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      onBlur={({target}) => setInvalid(!validate(target.value))}
    />
    {invalid && <Feedback feedback={feedback} />}
  </StyledField>
}

export default withFormContext(InputField)