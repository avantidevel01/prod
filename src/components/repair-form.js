import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const GATEWAY_URL =
  'https://29v8wns725.execute-api.us-east-2.amazonaws.com/prod'

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
    <div className='msg-confirm'>
      <p>
        Thank you for your Inquiry! Your message was sent and you will be
        hearing from our staff shortly.
      </p>
      <button type='button' onClick={() => setSubmitted(false)}>
        Clear Form
      </button>
    </div>
  )

  const showForm = (
    <div>
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
                    <label htmlFor='bname'>
                      <h5 className='text-gray-700'>Business Name</h5>
                      <input
                        type='text'
                        name='bname'
                        id='bname'
                        placeholder='Business Name'
                        ref={register}
                        className='mt-1 p-2 block w-full border-gray-500 rounded border-2'
                      />
                      {errors.name && (
                        <div className='msg-error'>{errors.name.message}</div>
                      )}
                    </label>
                  </div>
                  <div className='mt-4  md:w-1/2'>
                    <label htmlFor='department'>
                      <h5 className='text-gray-700'>Department</h5>
                      <input
                        type='text'
                        name='department'
                        id='department'
                        placeholder='Department'
                        ref={register}
                        className='mt-1 p-2 block w-full border-gray-500 rounded border-2'
                      />
                      {errors.name && (
                        <div className='msg-error'>{errors.name.message}</div>
                      )}
                    </label>
                  </div>
                </div>
                <div className='flex flex-col md:flex-row'>
                  <div className='mt-4 md:mr-4 md:w-1/2'>
                    <label htmlFor='fname'>
                      <h5 className='text-gray-700'>
                        First Name{' '}
                        <span className=' text-xs italic  text-gray-500'>
                          (Required)
                        </span>
                      </h5>
                      <input
                        type='text'
                        name='fname'
                        id='fname'
                        placeholder='First Name'
                        ref={register}
                        className='mt-1 p-2 block w-full border-gray-500 rounded border-2'
                      />
                      {errors.name && (
                        <div className='msg-error'>{errors.name.message}</div>
                      )}
                    </label>
                  </div>
                  <div className='mt-4  md:w-1/2'>
                    <label htmlFor='lname'>
                      <h5 className='text-gray-700'>Last Name</h5>
                      <input
                        type='text'
                        name='lname'
                        id='lname'
                        placeholder='Last Name'
                        ref={register}
                        className='mt-1 p-2 block w-full border-gray-500 rounded border-2'
                      />
                      {errors.name && (
                        <div className='msg-error'>{errors.name.message}</div>
                      )}
                    </label>
                  </div>
                </div>
                <div className='flex flex-col md:flex-row'>
                  <div className='mt-4 md:mr-4 md:w-1/2'>
                    <label htmlFor='address'>
                      <h5 className='text-gray-700'>Business Address</h5>
                      <input
                        type='text'
                        name='address'
                        id='address'
                        placeholder='1234 Main St.'
                        ref={register}
                        className='mt-1 p-2 block w-full border-gray-500 rounded border-2'
                      />
                      {errors.name && (
                        <div className='msg-error'>
                          {errors.address.message}
                        </div>
                      )}
                    </label>
                  </div>
                  <div className='mt-4  md:w-1/2'>
                    <label htmlFor='address2'>
                      <h5 className='text-gray-700'>Additional Address</h5>
                      <input
                        type='text'
                        name='address2'
                        id='address2'
                        placeholder='Suite 123'
                        ref={register}
                        className='mt-1 p-2 block w-full border-gray-500 rounded border-2'
                      />
                      {errors.name && (
                        <div className='msg-error'>
                          {errors.address2.message}
                        </div>
                      )}
                    </label>
                  </div>
                </div>
                <div className='flex flex-col md:flex-row'>
                  <div className='mt-4 md:mr-4 md:w-1/3'>
                    <label htmlFor='city'>
                      <h5 className='text-gray-700'>City</h5>
                      <input
                        type='text'
                        name='city'
                        id='city'
                        placeholder='City'
                        ref={register}
                        className='mt-1 p-2 block w-full border-gray-500 rounded border-2'
                      />
                      {errors.name && (
                        <div className='msg-error'>{errors.city.message}</div>
                      )}
                    </label>
                  </div>
                  <div className='mt-4 md:mr-4 md:w-1/3'>
                    <label htmlFor='state'>
                      <h5 className='text-gray-700'>State</h5>
                      <input
                        type='text'
                        name='state'
                        id='state'
                        placeholder='State'
                        ref={register}
                        className='mt-1 p-2 block w-full border-gray-500 rounded border-2'
                      />
                      {errors.name && (
                        <div className='msg-error'>{errors.state.message}</div>
                      )}
                    </label>
                  </div>
                  <div className='mt-4  md:w-1/3'>
                    <label htmlFor='zip'>
                      <h5 className='text-gray-700'>Zip Code</h5>
                      <input
                        type='text'
                        name='zip'
                        id='zip'
                        placeholder='Zip Code'
                        ref={register}
                        className='mt-1 p-2 block w-full border-gray-500 rounded border-2'
                      />
                      {errors.name && (
                        <div className='msg-error'>{errors.zip.message}</div>
                      )}
                    </label>
                  </div>
                </div>
                <div className='mt-4'>
                  <label htmlFor='email'>
                    <h5 className='text-gray-700'>Email</h5>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      placeholder='your@email.address'
                      ref={register}
                      className='mt-1 p-2 block w-full border-gray-500 rounded border-2'
                    />
                    {errors.email && (
                      <div className='msg-error'>{errors.email.message}</div>
                    )}
                  </label>
                </div>

                <div className='flex flex-col md:flex-row'>
                  <div className='mt-4 md:mr-4 md:w-1/2'>
                    <label htmlFor='mod1desc'>
                      <h5 className='text-gray-700'>Endoscope Model</h5>
                      <input
                        type='text'
                        name='mod1'
                        id='mod1'
                        placeholder='Endoscope Model'
                        ref={register}
                        className='mt-1 p-2 block w-full border-gray-500 rounded border-2'
                      />
                      {errors.name && (
                        <div className='msg-error'>{errors.mod1.message}</div>
                      )}
                    </label>
                  </div>
                  <div className='mt-4  md:w-1/2'>
                    <label htmlFor='mod1desc'>
                      <h5 className='text-gray-700'>Description of Problem</h5>
                      <input
                        type='text'
                        name='mod1desc'
                        id='mod1desc'
                        placeholder='Description of Problem'
                        ref={register}
                        className='mt-1 p-2 block w-full border-gray-500 rounded border-2'
                      />
                      {errors.name && (
                        <div className='msg-error'>
                          {errors.mod1desc.message}
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                <div className='mt-4'>
                  <label htmlFor='question'>
                    <h5 className='text-gray-700'>Additional Information</h5>
                    <textarea
                      ref={register}
                      name='question'
                      id='question'
                      rows='3'
                      placeholder='Your message'
                      className='mt-1 p-2 block w-full border-gray-500 rounded border-2'
                    />
                    {errors.question && (
                      <div className='msg-error'>{errors.question.message}</div>
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
