import React, { useRef } from 'react';
import './App.css';
import styled from 'styled-components';
import { FormProvider } from './components/FormContext';
import Submit from './components/Submit';
import ContactForm from './components/ContactForm';
import sendData from './helper/send-data'

const StyledForm = styled.form`
  padding: 25px 35px;
  background-color: #f5f5f5;
`

function App() {
  const form = useRef(null)
  return <div style={{width:"100%", textAlign: "center"}}>
    <FormProvider>
      <StyledForm ref={form}>
        <ContactForm />
      </StyledForm>
      <Submit sendData={() => sendData(form.current)} />
    </FormProvider>
  </div>
}

export default App;
