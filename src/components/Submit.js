import React, { useState } from 'react'
import RippleButton from './RippleButton'
import { withFormContext } from './FormContext'

const Submit = ({currentState, sendContact}) => {
  const onSubmit = () => {
    for(const state in currentState) {
      typeof currentState[state] === 'function' && currentState[state](true)
    }
    const complete = Object.values(currentState).every(state => state === true)
    complete && sendContact()
  }
  return <RippleButton text="Contact" onClickHook={onSubmit} />
}

export default withFormContext(Submit)