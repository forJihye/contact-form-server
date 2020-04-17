import React from 'react';
import './App.css';
import { FormProvider } from './components/FormContext';
import Submit from './components/Submit';
import ContactForm from './components/ContactForm';

function App() {
  const formRef = React.createRef()
  return <div style={{width:"100%", textAlign: "center"}}>
    <FormProvider>
      <ContactForm ref={formRef.current} />
      <Submit sendContact={() => console.log('발송!')} />
    </FormProvider>
  </div>
}

export default App;
