import Image from 'next/image';
import ContactForm from './ContactForm';
import Button from './Button';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col relative'>
      <div className='h-[85vh] md:h-[70vh] w-full relative overflow-hidden '>
        <div className='absolute inset-0 flex items-center justify-center h-full'>
          <div className='max-h-full max-w-full h-full'>
            <Image
              src='/bg.jpg'
              alt='bg'
              layout='fill'
              objectFit='cover'
              quality={100}
              className='transform scale-125'
            />
          </div>
        </div>
      </div>
      <div className='absolute flex items-center justify-center top-10 left-0 right-0 flex-col lg:top-20'>
        <div className='max-h-full max-w-full h-40 w-40 relative'>
          <Image
            src='/hero.webp'
            alt='bg'
            layout='fill'
            objectFit='contain'
            quality={100}
            className='transform object-contain'
          />
        </div>
      </div>
      <div className='absolute flex items-center justify-center top-60 left-0 right-0 flex-col md:top-[20rem]'>
        <div className='max-h-full max-w-full h-40 w-full text-center px-10 relative'>
          <h1 className='text-5xl md:text-7xl text-black text-center font-libreBaskerville w-full'>
            Website <br className='lg:hidden' />
            Launching Soon
          </h1>
        </div>
      </div>
      <div className='absolute flex items-center justify-center top-[26rem] left-0 right-0 flex-col md:top-[35rem] lg:top-[30rem]'>
        <div className='flex justify-center items-center h-full w-full'>
          <div className='max-w-xs sm:max-w-sm w-full'>
            <Button />
          </div>
        </div>
      </div>
      <ContactForm />
    </main>
  );
}
