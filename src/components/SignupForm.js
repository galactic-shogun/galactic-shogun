import React, { useId } from 'react';
import { useForm } from 'react-hook-form';

const SignupForm = ({
  className = '',
  buttonText = 'GET NOTIFIED',
  buttonClass = '',
  emailClass = '',
  firstNameClass = '',
}) => {
  const checkBoxID = useId();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
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
      <div className='flex items-center gap-2'>
        <input
          type='checkbox'
          {...register('privacyPolicy', { required: true })}
          aria-invalid={errors.privacyPolicy ? 'true' : 'false'}
          className='input'
          id={`privacyPolicy-${checkBoxID}`}
        />
        <label
          htmlFor={`privacyPolicy-${checkBoxID}`}
          className='font-serif text-sm'
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
      <input
        type='submit'
        value={buttonText}
        className={`button transform hover:scale-105 ${buttonClass}`}
      />
    </form>
  );
};

export default SignupForm;
