import React, { useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import Icon from '../icons/Icon';

const sleep = (x = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, x);
  });
};

const SignupForm = ({
  className = '',
  buttonText = 'GET NOTIFIED',
  buttonClass = '',
  emailClass = '',
  firstNameClass = '',
}) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const checkBoxID = useId();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setSuccess(false);

    await sleep();

    setLoading(false);
    setSuccess(true);

    console.log(data);
  };

  const getButtonDisplay = () => {
    if (loading) {
      return (
        <div className='flex justify-center gap-4'>
          <Icon name='loading' className='h-6 w-6 animate-spin text-white' />
          <span>Processing...</span>
        </div>
      );
    }

    if (success) {
      return 'SUBSCRIBED';
    }

    return buttonText;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-col gap-2 ${className}`}
    >
      <input
        {...register('firstName', { required: true })}
        aria-required='true'
        aria-invalid={errors.firstName ? 'true' : 'false'}
        placeholder='First Name'
        className={`input ${firstNameClass}`}
      />
      <input
        {...register('email', {
          required: true,
          pattern: { value: /\S+@\S+\.\S+/, message: 'invalid email' },
        })}
        aria-required='true'
        aria-invalid={errors.email ? 'true' : 'false'}
        type='email'
        placeholder='Email Address'
        className={`input ${emailClass}`}
      />
      <div className='flex items-start gap-2 md:items-center'>
        <input
          type='checkbox'
          {...register('privacyPolicy', { required: true })}
          aria-invalid={errors.privacyPolicy ? 'true' : 'false'}
          className='input mt-0.5 md:mt-0'
          id={`privacyPolicy-${checkBoxID}`}
        />
        <label
          htmlFor={`privacyPolicy-${checkBoxID}`}
          className='font-serif text-sm leading-none'
        >
          I have read and agree to the website{' '}
          <span className='text-sky-500'>
            <a
              href='https://www.termsfeed.com/live/b1a3aab1-09f8-47e9-8c6a-ef007a2af4fc'
              target='_blank'
              rel='noreferrer'
              className='underline'
            >
              privacy policy
            </a>{' '}
            *
          </span>
        </label>
      </div>
      <button
        type='submit'
        disabled={success}
        className={`button mt-2 transform tracking-wide hover:scale-105 active:scale-100 ${buttonClass}`}
      >
        {getButtonDisplay()}
      </button>
    </form>
  );
};

export default SignupForm;
