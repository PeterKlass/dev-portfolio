// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs'
// next image
import Image from 'next/image'

// Component
const WorkSlider = () => {
  return (
    <Swiper 
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlides.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
            {slide.images.map((image, imgIndex) => (
              <div key={imgIndex} className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                <div className='flex items-center justify-center relative overflow-hidden group'>
                  {/* image */}
                  <Image src={image.path} width={500} height={300} alt={image.title} />
                  {/* overlay gradient */}
                  <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                  {/* title */}
                  <div className='absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-all duration-300'>
                    <div className='flex items-center gap-x-2 text-center text-white p-2'>
                      {/* title part 1 */}
                      <div className='delay-100'>LIVE</div>
                      {/* title part 2 */}
                      <div className='translate-y-full group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                      {/* icon */}
                      <div className='text-xl translate-y-full group-hover:translate-y-0 transition-all duration-300 delay-200'>
                        <BsArrowRight /></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;