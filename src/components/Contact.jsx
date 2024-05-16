import React from 'react'
import { useForm } from 'react-hook-form'

const Contact = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()



  const handleForm = (data) => {
    console.log(data.fullName);
  }
  return (
    <div className='w-full flex justify-center'>
      <h2 className='text-center text-white text-2xl md:text-3xl py-4 font-semibold uppercase'>Contact Me</h2>

      <form onSubmit={handleSubmit((data) => {
        handleForm(data)
      })} className=' w-full md:w-[400px] rounded-md bg-slate-800 p-4'>
        <div>
          <input className='w-full px-4 py-2 rounded-md bg-transparent border my-2 text-white' type="text" placeholder='Enter your fullname'{...register('fullName', {
            required: "Fullname is required!"
          })} />
          {
            errors.fullName && <div className='text-md text-red-500'>{errors.fullName.message}</div>
          }
        </div>
        <div>
          <input className='w-full px-4 py-2 rounded-md bg-transparent border my-2 text-white' type="text" placeholder='Enter your email' {...register('email', {
            required: 'Email is required!',
            pattern: {
              value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
              message: 'Email not valid!',
            },
          })} />
          {
            errors.email && <div className='text-md text-red-500'>{errors.email.message}</div>
          }
        </div>
        <div>
          <input className='w-full px-4 py-2 rounded-md bg-transparent border my-2 text-white' type="text" placeholder='write message' {
            ...register('message', {
              required: 'Message is requied!'
            })
          } />
          {
            errors.message && <div className='text-md text-red-500'>{errors.message.message}</div>
          }
        </div>
        <div>
          <button className='bg-green-400 px-4 py-2  my-2 font-semibold text-md rounded-md text-slate-900' type='submit'>Send Message</button>
        </div>
      </form>
    </div>
  )
}

export default Contact