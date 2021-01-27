import React, { useState } from "react";
import { useForm } from "react-hook-form";

const GATEWAY_URL = "https://29v8wns725.execute-api.us-east-2.amazonaws.com/prod";

export default () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    errors,
    reset,
  } = useForm();

  const onSubmit = async data => {
    try {
      await fetch(GATEWAY_URL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      setSubmitted(true);
      reset();
    } catch (error) {
      setError(
        "submit",
        "submitError",
        `Oops! There seems to be an issue! ${error.message}`
      );
    }
  };

  const showSubmitError = msg => <p className="msg-error">{msg}</p>;

  const showThankYou = (
    <div className="msg-confirm">
      <p>Thank you for your Inquiry! Your message was sent and you will be hearing from our staff shortly.</p>
      <button type="button" onClick={() => setSubmitted(false)}>
        Clear Form
      </button>
    </div>
  );

  const showForm = (
    <div className="">
    <form onSubmit={handleSubmit(onSubmit)} method="post">
      <div className="mt-4">
      <label htmlFor="name">
        <h5 className="text-gray-700">First Name</h5>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          ref={register}
          className="mt-1 p-2 block w-full border-gray-400 rounded border-2"
        />
        {errors.name && <div className="msg-error">{errors.name.message}</div>}
      </label>
      </div>
      <div className="mt-4">
      <label htmlFor="email">
        <h5 className="text-gray-700">Email</h5>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your@email.address"
          ref={register}
          className="mt-1 p-2 block w-full border-gray-400 rounded border-2"
        />
        {errors.email && (
          <div className="msg-error">{errors.email.message}</div>
        )}
      </label>
      </div>
      <div className="mt-4">
      <label htmlFor="question">
        <h5 className="text-gray-700">Message</h5>
        <textarea
          ref={register}
          name="question"
          id="question"
          rows="3"
          placeholder="Your message"
          className="mt-1 p-2 block w-full border-gray-400 rounded border-2"
        />
        {errors.question && (
          <div className="msg-error">{errors.question.message}</div>
        )}
      </label>
          </div>
      <div className="submit-wrapper py-4">
        <button type="submit" className="btn-outline-primary transition duration-300 ease-in-out focus:shadow-outline border-2 border-blue-800 hover:bg-blue-800 text-blue-800 hover:text-white font-bold py-2 px-4 rounded">
          Send
        </button>
      </div>
    </form>
    </div>
  );

  return (
    <div className="page contact-page">
      <div className="text-side">
        {errors && errors.submit && showSubmitError(errors.submit.message)}
      </div>
      <div className="form-side">{submitted ? showThankYou : showForm}</div>
    </div>
  );
};
