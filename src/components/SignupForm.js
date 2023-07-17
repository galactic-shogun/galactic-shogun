import React from 'react';

const SignupForm = ({
  className,
  buttonText = 'GET NOTIFIED',
  buttonClass = '',
  emailClass = '',
  firstNameClass = '',
}) => {
  return (
    <div className={className}>
      <div className='flex flex-col gap-2'>
        <input className={`input ${firstNameClass}`} placeholder='First Name' />
        <input className={`input ${emailClass}`} placeholder='Email Address' />
        <button className={`button transform hover:scale-105 ${buttonClass}`}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default SignupForm;
