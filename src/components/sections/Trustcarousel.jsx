
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Testimony from '../../assets/data/Testimonials';
import { useEffect, useState } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';



const Testifiers = () => {

  useEffect(() => {
    setInterval(() => {
      AOS.init({ duration: 3000 });

    }, 1000);

  }, []);



  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


  return (
    <>


      <Carousel responsive={responsive}
       
       
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}

      >


        {Testimony.map((Testimony, index) => {
          return (

            <div className='  grid grid-cols-1 md:grid-cols-2 shadow-lg py-4 bg-center' key={index} 
              >

              <div className='   flex justify-center p-6 flex-col '>
              <p className='pt-4 text-bas text-gray-800  shadow-sm font-normal ' data-aos-duration="1500" data-aos="slide-down">{Testimony.Subtext}
              {Testimony.Subtext}</p>
              <div className='w-[50px] my-8 rounded-lg h-[3px] bg-darkGreen' data-aos="slide-right" />
                  < h4 className='text-black font-bold text-3xl'>  {Testimony.Title}</h4>
              </div>

              <img src=  {Testimony.Picture} alt='ourthrive-image ' className=' py-4  w-full' />



            </div>


          )

        })}




      </Carousel>






    </>
  )
}

export default Testifiers;