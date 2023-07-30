import React, { useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import Icon from '../icons/Icon';
import jsonp from 'jsonp';

const MAILCHIMP_URL =
  'https://gmail.us21.list-manage.com/subscribe/post-json?u=092e604a67e8c12c2e7c7c627&amp;id=69e25d6845&amp;f_id=00755fe1f0';

const STATUS = {
  IDLE: 'idle',
  SUCCESS: 'success',
  LOADING: 'loading',
};

const toQueryString = (params) => {
  return Object.keys(params)
    .map((key) => key + '=' + params[key])
    .join('&');
};

const SignupForm = ({
  className = '',
  buttonText = 'GET NOTIFIED',
  buttonSuccessText = 'SUBSCRIBED',
  buttonClass = '',
  emailClass = '',
  firstNameClass = '',
}) => {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);
  const checkBoxID = useId();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const params = toQueryString({
      FNAME: data.firstName,
      EMAIL: data.email,
    });

    setStatus(STATUS.LOADING);

    jsonp(`${MAILCHIMP_URL}&${params}`, { param: 'c' }, (err, data) => {
      if (err || data.result !== 'success') {
        setStatus(STATUS.ERROR);
        setError(err || data.msg);
      } else {
        setStatus(STATUS.SUCCESS);
        reset();
      }
    });
  };

  const getButtonDisplay = (status) => {
    switch (status) {
      case STATUS.LOADING:
        return (
          <div className='flex justify-center gap-4'>
            <Icon name='loading' className='h-6 w-6 animate-spin text-white' />
            <span>Processing...</span>
          </div>
        );
      case STATUS.SUCCESS:
        return buttonSuccessText;
      default:
        return buttonText;
    }
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
        className={`button mt-2 transform tracking-wide hover:scale-105 active:scale-100 ${buttonClass}`}
      >
        {getButtonDisplay(status)}
      </button>
      {error && <p className='text-center text-sm text-red-500'>{error}</p>}
    </form>
  );
};

export default SignupForm;
