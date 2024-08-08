'use client'

import {
  Alert, Button, Form, FormControl, InputGroup,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import InputGroupText from 'react-bootstrap/InputGroupText'
import { signIn } from 'next-auth/react'
import useDictionary from '@/locales/dictionary-hook'
import { Auth } from '@/request/auth'


// PERSONNAL HOOKS OF REDUX
import { useAppDispatch ,useAppSelector} from '@/redux/hooks'

export default function Register() {
  const dict = useDictionary()
  const [submitting, setSubmitting] = useState(false)

  const [confirmPassword,setConfirmPassword] = useState<string>('')

  //PROPS OF FONCTIONS THAT COOL ENDPOINT 
  const dispatch = useAppDispatch()
  const [loading,setLoading] =useState<Boolean>(false)
  const router = useRouter()
  const [error, setError] = useState('')
  const [formDatas, setFormData] = useState<{
    username: string;
    email: string;
    password: string;
    role:string
  }>({
    username: '',
    email: '',
    password: '',
    role:'PARENT'
  });

  // instace of class auth 
  const auth = new Auth()



  const handleChange =(fieldName:string,value : string | number )=>{
      setFormData({
        ...formDatas,
        [fieldName]:value
      })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // USE THE ENDPOINT

    //VERIFY IF PASSWORD IS VALID 

    if(formDatas.password === confirmPassword){
      auth.register({dispatch:dispatch,formData:formDatas,navigate:router,handleChangeLoading:(state)=>{setLoading(state)}})
    }else{
      alert('verifer votre mots de passe ')
    }


    console.log(formDatas);
  };
  // const register = async () => {
  //   setSubmitting(true)

  //   try {
  //     const res = await signIn('credentials', {
  //       username: 'Username',
  //       password: 'Password',
  //       redirect: false,
  //       callbackUrl: '/',
  //     })

  //     if (!res) {
  //       setError('Register failed')
  //       return
  //     }

  //     const { ok, url, error: err } = res

  //     if (!ok) {
  //       if (err) {
  //         setError(err)
  //         return
  //       }

  //       setError('Register failed')
  //       return
  //     }

  //     if (url) {
  //       router.push(url)
  //     }
  //   } catch (err) {
  //     if (err instanceof Error) {
  //       setError(err.message)
  //     }
  //   } finally {
  //     setSubmitting(false)
  //   }
  // }

  return (
    <>
      <Alert variant="danger" show={error !== ''} onClose={() => setError('')} dismissible>{error}</Alert>
      <Form >
        <InputGroup className="mb-3">
          <InputGroupText><FontAwesomeIcon icon={faUser} fixedWidth /></InputGroupText>
          <FormControl
            name="username"
            required
            disabled={submitting}
            placeholder={dict.signup.form.username}
            aria-label="Username"
            onChange={(e)=> handleChange('username',e.target.value)}

          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroupText>
            <FontAwesomeIcon icon={faEnvelope} fixedWidth />
          </InputGroupText>
          <FormControl
            type="email"
            name="email"
            required
            disabled={submitting}
            placeholder={dict.signup.form.email}
            aria-label="Email"
            onChange={(e)=> handleChange('email',e.target.value)}

          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroupText><FontAwesomeIcon icon={faLock} fixedWidth /></InputGroupText>
          <FormControl
            type="password"
            name="password"
            required
            disabled={submitting}
            placeholder={dict.signup.form.password}
            aria-label="Password"
            onChange={(e)=> handleChange('password',e.target.value)}

          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroupText><FontAwesomeIcon icon={faLock} fixedWidth /></InputGroupText>
          <FormControl
            type="password"
            name="password_repeat"
            required
            disabled={submitting}
            placeholder={dict.signup.form.confirm_password}
            aria-label="Confirm password"
            onChange ={e => setConfirmPassword(e.target.value)}
          />
        </InputGroup>

        <Button type="submit" 
        className="d-block w-100" 
        disabled={submitting} 
        variant="success"
        onClick={(e)=> handleSubmit(e)}
        >
          {dict.signup.form.submit}
        </Button>
      </Form>
    </>
  )
}
