import React from 'react'
import InputField from './InputField'
import { withFormContext } from './FormContext'

const ContactForm = () => {
  return <>
    <InputField type="text" name="name" placeholder="이름" feedback="이름을 입력하세요." validate={(value) => Boolean(value.length)} />
    <InputField type="text" name="phone" placeholder="휴대폰 번호" feedback="휴대폰 번호를 입력하세요." validate={(value) => Boolean(value.length)} />
    <InputField type="text" name="email" placeholder="이메일 주소" feedback="이메일 주소를 입력하세요." validate={(value) => Boolean(value.length)} />
    <InputField type="text" name="company" placeholder="회사명" feedback="회사명을 입력하세요." validate={(value) => Boolean(value.length)} />
  </>
}

export default withFormContext(ContactForm)