import React from 'react'
import Circle from './Circle';
import ProjectSlider from './ProjectSlider';

const Home = () => {
  return (
    <>
      <section className='folio_12'>
        <ProjectSlider />
      </section>
      <section>
        <Circle />
      </section>
    </>
  )
}

export default Home;