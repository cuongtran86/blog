import React from 'react'

const Register = () => {
  return (
    <div className='authen'>
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder='username' />
        <input required type="email" placeholder='email' />
        <input required type="password" placeholder='password' />
        <input required type="password" placeholder='confirm password' />
        <button>Register</button>
        <p>Register error</p>
        <span>Hve account? <a href="/login">Login</a>
        </span>
      </form>
    </div>
  )
}

export default Register