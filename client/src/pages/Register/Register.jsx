import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Register.css' // Stil dosyasını eklediğinizden emin olun

const Login = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleChangeName = (e) => {
    setUsername(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleChangeConfirmPassword = (e) => {
    setconfirmPassword(e.target.value)
    if(password === e.target.value){
        setError('')
    }else{
        setError('passwords is not match')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email === '' || password === '') {
      setError('Email and password are required.')
    }
    if (username === '') {
      setError('Name is required.')
    } 
    if(password !== confirmPassword){
        setError('passwords is not match')
    }
    else {
      setError('')
      // Giriş işlemi burada gerçekleştirilir
      console.log('Username:', username)
      console.log('Email:', email)
      console.log('Password:', password)
      console.log('Confirm Password:', confirmPassword)

      // Burada bir API çağrısı yapabilirsiniz
    }
  }

  return (
    <div className='register-page'>
      <div className='left-side'>
        <div className='overlay'></div>
      </div>
      <div className='right-side'>
        <div className='register-container'>
          <h1 className='register-title'>Register</h1>
          <p className='register-subtitle'>Create An Account</p>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <input
                type='username'
                id='username'
                name='username'
                value={username}
                placeholder='Enter a username'
                autoComplete='off'
                onChange={handleChangeName}
              />
            </div>
            <div className='form-group'>
              <input
                type='email'
                id='email'
                name='email'
                value={email}
                placeholder='Enter a email'
                autoComplete='off'
                onChange={handleChangeEmail}
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                id='password'
                name='password'
                value={password}
                placeholder='Enter a password'
                autoComplete='off'
                onChange={handleChangePassword}
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                value={confirmPassword}
                placeholder='Enter a confirm password'
                autoComplete='off'
                onChange={handleChangeConfirmPassword}
              />
            </div>
            {error && <p className='error'>{error}</p>}
            <button type='submit' className='register-button'>
              Register
            </button>
          </form>

          <div className='or-register-with'>
            <span>Or Register with</span>
          </div>
          <button className='google-register-button'>
            <div className='google-icon'>G</div>
            <div className='google-text'>Google</div>
          </button>
          <p className='register-text'>
            Already have an account? <Link to='/login'>Login now</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
