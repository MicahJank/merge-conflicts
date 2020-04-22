import React, { useState } from 'react';

import { useForm } from 'react-hook-form';

const Form = () => {

    const { register, handleSubmit, errors } = useForm()

    const onSubmit = data => { console.log(data) }


  return (
    <form className='ui big form' onSubmit={handleSubmit(onSubmit)}>
      <input className='form-input' name="username" placeholder='username' ref={register} />
      {errors.username && <span>This field is required</span>}

      <input className='form-input' type='password' name="password" placeholder='password' ref={register({ required: true })} />
      {errors.password && <span>This field is required</span>}
      
      <button className='ui primary button right floated big' type="submit">Log in</button>
    </form>
  )
}

export default Form;