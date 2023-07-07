'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Footer from './Footer';

export default function ContactForm() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      setIsFormSubmitted(true);
      reset();
    });
  };

  if (isFormSubmitted) {
    return (
      <>
        <div className='bg-white text-black flex flex-col justify-center items-center'>
          <h3 className='text-4xl text-primary pt-8 font-libreBaskerville'>
            Thank You!
          </h3>
          <p className='text-lg max-w-4xl text-center px-10 pb-20'>
            Your message has been submitted successfully.
          </p>
        </div>
        <Footer />
      </>
    );
  }
  return (
    <div className='bg-white text-black flex flex-col justify-center items-center '>
      <h3 className='text-4xl text-primary pt-8 font-libreBaskerville'>
        Contact Us
      </h3>
      <div className='w-full flex flex-col'>
        <div className='flex py-6'>
          <div className='w-full ' />
          <div className='w-full  border-b-2 border-primary opacity-25' />
          <div className='w-full' />
        </div>
      </div>
      <p className='text-lg max-w-4xl text-center px-10'>
        If you have a request, questions, or you&apos;d like to get in contact,
        please fill out the form below.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mt-4 w-full px-10 max-w-4xl'
      >
        <div className='mb-4'>
          <input
            type='text'
            id='name'
            {...register('name', { required: true })}
            className={`border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } p-2 w-full rounded`}
            placeholder='Name'
          />
          {errors.name && (
            <span className='text-red-500'>Name is required</span>
          )}
        </div>

        <div className='mb-4'>
          <input
            type='email'
            id='email'
            {...register('email', { required: true })}
            className={`border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } p-2 w-full rounded`}
            placeholder='Email'
          />
          {errors.email && (
            <span className='text-red-500'>Email is required</span>
          )}
        </div>

        <div className='mb-4'>
          <textarea
            id='message'
            {...register('message', { required: true })}
            className={`border ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            } p-2 w-full h-60 rounded`}
            placeholder='Message'
          ></textarea>
          {errors.message && (
            <span className='text-red-500'>Message is required</span>
          )}
        </div>

        <button
          type='submit'
          className='bg-primary/70 w-full text-black p-4 rounded-full cursor-pointer hover:bg-primary/50 active:bg-primary'
        >
          Submit
        </button>
      </form>
      <div className='flex flex-col space-y-8 py-10 text-center'>
        <h3 className='text-lg '>Dragonwood Designs</h3>
        <h3 className='text-sm text-black/80'>Australia</h3>
        <a
          href='mailto:admin@dragonwooddesigns.art'
          className='text-primary/70 font-bold cursor-pointer'
        >
          admin@dragonwooddesigns.art
        </a>
      </div>
      <Footer />
    </div>
  );
}
