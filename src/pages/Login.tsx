import React from 'react'

const Login = () => {
  return (
    <div className='authen'>
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder='username' />
        <input required type="password" placeholder='password' />
        <button>Login</button>
        <p>Login error</p>
        <span>Don't have account? <a href="/register">Register</a>
        </span>
      </form>
    </div>
  )
}

export default Login