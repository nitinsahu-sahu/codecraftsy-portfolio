import React from 'react'

import ProjectSlider from './ProjectSlider';
import ContactUs from '../contactus/ContactUs';

const Home = () => {
  return (
    <>
      <section id='home' className='w-11/12 mx-auto my-5 shadow-random-shadow' >
        <ProjectSlider />
      </section>
      <section id='contact'>
        <ContactUs />
      </section>
    </>
  )
}

export default Home;