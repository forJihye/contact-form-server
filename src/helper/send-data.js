import 'formdata-polyfill'
import axios from 'axios';

const requestServer = ({name, phone, email, company}) => {
  axios({
    url: 'http://localhost:4000/contact',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      "name": name,
      "phone": phone,
      "email": email,
      "company": company
    }  
  }).catch((data) => {
    console.log(data)
  })
}

export default async (form) => {
  const fd = new FormData(form)
  const name = fd.get('name')
  const phone = fd.get('phone')
  const email = fd.get('email')
  const company = fd.get('company')

  try {
    await requestServer({name, phone, email, company})
  }catch(error){
    alert('다시 시도해주십시오.')
    console.log(error)
  }
}