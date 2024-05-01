import React from 'react'
import Circle from './Circle';
import SingleProjectCard from './ProjectSlider';

const Home = () => {
  return (
    <>
      <section className='folio_12'>
        <SingleProjectCard />
      </section>
      <section>
        <Circle />
      </section>
    </>
  )
}

export default Home;