import React from 'react'
import ServicesSection  from '../components/Servicesection';

import Hero from '../components/sections/hero';
import MultilingualSupportSection from '../components/countUp';
import WhyUs from '../components/Whyus';
import BusinessSolutions from '../components/sections/Ourservices';
import CareersSection from '../components/CareersSection';
export const Home = () => {



  return (
    <>
      <Hero />
      <MultilingualSupportSection/>
      <BusinessSolutions />

<WhyUs/>
<ServicesSection/>
<CareersSection/>
    </>

  )

}

