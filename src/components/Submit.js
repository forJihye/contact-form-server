import React from 'react'
import RippleButton from './RippleButton'
import { withFormContext } from './FormContext'

const Submit = ({currentState, sendData}) => {
  const onSubmit = () => {
    for(const state in currentState) {
      typeof currentState[state] === 'function' && currentState[state](true)
    }
    const complete = Object.values(currentState).every(state => state === true)
    complete && sendData()
  }
  return <RippleButton text="Contact" onClickHook={onSubmit} />
}

export default withFormContext(Submit)