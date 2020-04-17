import React from 'react'
import InputField from './InputField'
import styled from 'styled-components'
import { withFormContext } from './FormContext'

const Form = styled.form`
  padding: 25px 35px;
  background-color: #f5f5f5;
`

const ContactForm = React.forwardRef((props, ref) => {
  return <Form ref={ref} {...props}>
    <InputField type="text" name="name" placeholder="이름" feedback="이름을 입력하세요." validate={(value) => Boolean(value.length)} />
    <InputField type="text" name="phone" placeholder="휴대폰 번호" feedback="휴대폰 번호를 입력하세요." validate={(value) => Boolean(value.length)} />
    <InputField type="text" name="email" placeholder="이메일 주소" feedback="이메일 주소를 입력하세요." validate={(value) => Boolean(value.length)} />
    <InputField type="text" name="company" placeholder="회사명" feedback="회사명을 입력하세요." validate={(value) => Boolean(value.length)} />
  </Form>
})

export default withFormContext(ContactForm)