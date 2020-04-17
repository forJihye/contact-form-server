import React, { createContext, useState } from 'react'

const Context = createContext()

export const FormProvider = (props) => {
  const [state, setState] = useState({})
  const value = {
    state, 
    setState: data => setState(Object.assign(state, data))
  }
  return <Context.Provider {...props} value={value} />
}

export const withFormContext = WrapperComponents => props => {
  const [invalid, setInvalid] = useState(false)
  return <Context.Consumer>
    {
      ({state, setState}) => {
        const validate = props.validate
        ? (value) => {
          const valid = props.validate(value)
          setState({[props.name] : valid ? true : setInvalid})
          return valid
        }
        : () => null
        
        !(props.name in state) && validate('')

        return <WrapperComponents
          {...props} 
          invalid={invalid}
          setInvalid={setInvalid}
          validate={validate}
          currentState={state}
        />
      }
    }
  </Context.Consumer>
}