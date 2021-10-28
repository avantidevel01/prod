import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const GATEWAY_URL =
  'https://d649gmqx4h.execute-api.us-east-2.amazonaws.com/prod'

export default () => {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, setError, errors, reset } = useForm()

  const onSubmit = async (data) => {
    try {
      await fetch(GATEWAY_URL, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      setSubmitted(true)
      reset()
    } catch (error) {
      setError(
        'submit',
        'submitError',
        `Oops! There seems to be an issue! ${error.message}`
      )
    }
  }

  const showSubmitError = (msg) => <p className='msg-error'>{msg}</p>

  const showThankYou = (
    <div className='absolute top-0 mt-56'>
      <div className=' bg-green-800 text-gray-100 font-semibold rounded-lg text-center m-20'>
        <p className='px-10 pt-10 pb-5'>
          Thank you for your Inquiry! Your message was sent and you will be
          hearing from our staff shortly.
        </p>
        <button
          type='button'
          className=' items-center justify-center hover:bg-gray-500 text-gray-800  p-2 mb-10 rounded-md bg-gray-200 border-2 boder-solid border-gray-500 md:text-xl text-lg font-medium uppercase tracking-wide w-1/4 active:bg-blue-900'
          onClick={() => setSubmitted(false)}
        >
          Clear Form
        </button>
      </div>
    </div>
  )

  const showForm = (
    <div id='repair-order-form'>
      <div className='bg-gray-400 rounded-lg shadow-lg my-6  p-4 border-2 border-blue-800 border-solid'>
        <div className='text-2xl text-center font-bold px-6 py-4 text-gray-900 leading-tight'>
          Repair Order Form
        </div>
        <div className='text-center'>
          <p className='md:py-2 md:px-6 text-gray-700 leading-normal text-lg'>
            Fill out our Repair Order Form to schedule a repair or to receive a
            free estimate. All repairs are guaranteed with our parts & labor
            warranty policy.
          </p>
        </div>
        <div className=' w-full justify-center'>
          <div className='md:bg-gray-300 md:m-6 md:p-4 md:border-2 md:border-blue-800 md:border-solid md:rounded-md md:shadow-lg '>
            <div className=''>
              <form onSubmit={handleSubmit(onSubmit)} method='post'>
                <div className='flex flex-col md:flex-row'>
                  <div className='mt-4 md:mr-4 md:w-1/2'>
                    <label htmlFor='fname' className='text-gray-700'>
                      First Name
                      <span className='text-xs italic text-gray-500 pl-1'>
                        (Required)
                      </span>
                      <input
                        type='text'
                        name='fname'
                        id='fname'
                        placeholder='First Name'
                        ref={register({ required: true, maxLength: 200 })}
                        className='mt-1 p-2 block w-full border-gray-500 rounded border-2'
                      />
                      {errors.fname && (
                        <p className='text-red-600 font-medium italic ml-2'>
                          First Name is required
                        </p>
                      )}
                    </label>
                  </div>
                  <div className='mt-4  md:w-1/2'>
                    <label htmlFor='lname' className='text-gray-700 '>
                      Last Name
                      <span className='text-xs italic text-gray-500 pl-1'>
                        (Required)
                      </span>
                      <input
                        type='text'
                        name='lname'
                        id='lname'
                        placeholder='Last Name'
                        ref={register({ required: true, maxLength: 200 })}
                        className='mt-1 p-2 block w-full border-gray-500 rounded border-2'
                      />
                      {errors.lname && (
                        <p className=' text-red-600 font-medium italic ml-2'>
                          Last Name is required
                        </p>
                      )}
                    </label>
                  </div>
                </div>

                <div className='flex flex-col md:flex-row'>
                  <div className='mt-4 md:mr-4 md:w-1/2'>
                    <label htmlFor='email' className='text-gray-700'>
                      Email
                      <span className='text-xs italic text-gray-500 pl-1'>
                        (Required)
                      </span>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='your@email.address'
                        ref={register({
                          required: true,
                          pattern: /^\S+@\S+$/i,
                        })}
                        className='mt-1 p-2 block w-full border-gray-500 rounded border-2'
                      />
                      {errors.email && (
                        <p className='text-red-600 font-medium italic ml-2'>
                          Email Address is required
                        </p>
                      )}
                    </label>
                  </div>
                  <div className='mt-4  md:w-1/2'>
                    <label htmlFor='phone' className='text-gray-700'>
                      Phone Number
                      <span className='text-xs italic text-gray-500 pl-1'>
                        (Required)
                      </span>
                      <input
                        type='text'
                        name='phone'
                        id='phone'
                        placeholder='(123) 456-7890'
                        ref={register({
                          required: true,
                          minLength: 6,
                          maxLength: 12,
                        })}
                        className='mt-1 p-2 block w-full border-gray-500 rounded border-2'
                      />
                      {errors.phone && (
                        <p className=' text-red-600 font-medium italic ml-2'>
                          Phone Number is required
                        </p>
                      )}
                    </label>
                  </div>
                </div>
                <div className='mt-4'>
                  <label htmlFor='bname' className='text-gray-700'>
                    Business Name
                    <input
                      type='text'
                      name='bname'
                      id='bname'
                      placeholder='Business Name'
                      ref={register}
                      className='mt-1 p-2 block w-full border-gray-500 rounded border-2'
                    />
                    {errors.bname && (
                      <div className='msg-error'>{errors.bname.message}</div>
                    )}
                  </label>
                </div>
                <div className='flex flex-col md:flex-row'>
                  <div className='mt-4 md:mr-4 md:w-1/2'>
                    <label htmlFor='address' className='text-gray-700'>
                      Business Address
                      <input
                        type='text'
                        name='address'
                        id='address'
                        placeholder='1234 Main St.'
                        ref={register}
                        className='mt-1 p-2 block w-full border-gray-500 rounded border-2'
                      />
                      {errors.address && (
                        <div className='msg-error'>
                          {errors.address.message}
                        </div>
                      )}
                    </label>
                  </div>
                  <div className='mt-4 md:w-1/2'>
                    <label htmlFor='city' className='text-gray-700'>
                      City
                      <input
                        type='text'
                        name='city'
                        id='city'
                        placeholder='City'
                        ref={register}
                        className='mt-1 p-2 block w-full border-gray-500 rounded border-2'
                      />
                      {errors.city && (
                        <div className='msg-error'>{errors.city.message}</div>
                      )}
                    </label>
                  </div>
                </div>
                <div className='flex flex-col md:flex-row'>
                  <div className='mt-4 md:mr-4 md:w-1/2'>
                    <label htmlFor='state' className='text-gray-700'>
                      State
                      <input
                        type='text'
                        name='state'
                        id='state'
                        placeholder='State'
                        ref={register}
                        className='mt-1 p-2 block w-full border-gray-500 rounded border-2'
                      />
                      {errors.state && (
                        <div className='msg-error'>{errors.state.message}</div>
                      )}
                    </label>
                  </div>
                  <div className='mt-4  md:w-1/2'>
                    <label htmlFor='zip' className='text-gray-700'>
                      Zip Code
                      <input
                        type='text'
                        name='zip'
                        id='zip'
                        placeholder='Zip Code'
                        ref={register}
                        className='mt-1 p-2 block w-full border-gray-500 rounded border-2'
                      />
                      {errors.zip && (
                        <div className='msg-error'>{errors.zip.message}</div>
                      )}
                    </label>
                  </div>
                </div>

                <div className='flex flex-col md:flex-row'>
                  <div className='mt-4 md:mr-4 md:w-1/2'>
                    <label htmlFor='mod1desc' className='text-gray-700'>
                      Endoscope Model
                      <input
                        type='text'
                        name='mod1'
                        id='mod1'
                        placeholder='Endoscope Model'
                        ref={register}
                        className='mt-1 p-2 block w-full border-gray-500 rounded border-2'
                      />
                      {errors.mod1 && (
                        <div className='msg-error'>{errors.mod1.message}</div>
                      )}
                    </label>
                  </div>
                  <div className='mt-4  md:w-1/2'>
                    <label htmlFor='mod1desc' className='text-gray-700'>
                      Description of Problem
                      <input
                        type='text'
                        name='mod1desc'
                        id='mod1desc'
                        placeholder='Description of Problem'
                        ref={register}
                        className='mt-1 p-2 block w-full border-gray-500 rounded border-2'
                      />
                      {errors.mod1desc && (
                        <div className='msg-error'>
                          {errors.mod1desc.message}
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                <div className='mt-4'>
                  <label htmlFor='message1' className='text-gray-700'>
                    Additional Information
                    <textarea
                      ref={register}
                      name='message1'
                      id='message1'
                      rows='3'
                      placeholder='Your message'
                      className='mt-1 p-2 block w-full border-gray-500 rounded border-2'
                    />
                    {errors.message1 && (
                      <div className='msg-error'>{errors.message1.message}</div>
                    )}
                  </label>
                </div>
                <div className='submit-wrapper py-4'>
                  <button
                    type='submit'
                    className='block md:h-full text-center hover:bg-green-800 shadow-lg text-white px-5 py-3 rounded-md bg-blue-800 text-sm font-medium uppercase tracking-wide w-full active:bg-green-900'
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='text-center'>
          <p className='py-2 md:px-6 text-gray-700 leading-tight text-lg'>
            NOTE: Cosmetic issues, i.e., scratches, dents, discolorations, etc.,
            will not be recommended for repair unless those issue are causing an
            equipment system failure. If you would like cosmetic issues to be
            repaired, please note these in your description of the problem.
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <div className='page contact-page'>
      <div className='text-side'>
        {errors && errors.submit && showSubmitError(errors.submit.message)}
      </div>
      <div className='form-side'>{submitted ? showThankYou : showForm}</div>
    </div>
  )
}
