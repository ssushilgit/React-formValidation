import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState({

  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}
    if(!formData.username.trim()){
      validationErrors.username = "Username is required"  
    }
    if (!formData.email.trim()) {
      validationErrors.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)){
      validationErrors.email ="email is not valid"
    }


    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    }else if (formData.password.length<6){
      validationErrors.password ="Password should be at least 6 character"
    }

    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors)
    if(Object.keys(validationErrors).length ===0){
      alert("Form Submitted Successfully")
    }
  }

  return (

    <form onClick={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" name='username' placeholder='Username' autoComplete='off' onChange={handleChange}  />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" name='email' placeholder='example@gmail.com' autoComplete='off' onChange={handleChange}  />
        {errors.email && <span>{errors.email}</span>}

      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" name='password' placeholder='******' autoComplete='off' onChange={handleChange} />
        {errors.password && <span>{errors.password}</span>}

      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" name='confirmPassword' placeholder='******' onChange={handleChange}/>
        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}

      </div>
      <button type='submit'> Submit</button>
    </form>

  )
}

export default App