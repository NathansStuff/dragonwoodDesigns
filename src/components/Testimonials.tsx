import Testimony from '@/components/Testimony';
import { ITestimony } from '@/types/ITestimony';

type Props = {};

const mockTestimony: ITestimony[] = [
  {
    stars: 5,
    name: 'Melinda - 05 Jul, 2023',
    testimony:
      "Thank you so much for the bookmarks!! I am over the moon with them, they are gorgeous!! 😁 ",
  },
  {
    stars: 5,
    name: 'Nia - 11 Aug, 2023',
    testimony:
      'Awesome customer service. These were coming from Australia and the tracking only works in that space. Ayla made sure to keep me informed without me needing to reach out. For you Soulfinders out there, these are the cutest things. Well made and approved by Maria! Get them all!!',
  },
  {
    stars: 5,
    name: 'Vilde Bekvik - 19 Aug, 2023',
    testimony:
      'I think she is super nice, even though it turned out to be some complications during sending, she let me know at once! So happy with the products. Will gladly order more stuff in the future! ❤',
  },
];

async function Testimonials({}: Props) {
  const testimonials: ITestimony[] = mockTestimony;

  return (
    <div className='w-full bg-white text-black py-4 pt-10'>
      <h4 className='text-3xl font-bold text-center'>Testimonials</h4>
      <div className='flex-center flex-col sm:flex-row flex-wrap px-10 space-y-10 md:flex-row md:space-y-0 md:space-x-10'>
        {testimonials.map((testimony, index) => (
          <Testimony
            testimony={testimony}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
