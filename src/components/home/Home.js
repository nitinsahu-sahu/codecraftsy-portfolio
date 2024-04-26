import React from 'react'
import Circle from './Circle';

const Home = () => {
  return (
    <>
    <section>
      <div className="img-accordion">
        <div className="img img1">
          <p className='bgi1'></p>
        </div>
        <div className="img img2">
          <p className='bgi2'>Img 2</p>
        </div>

        <div className="img img3">
          <p className='bgi3'>Img 3</p>
        </div>

        <div className="img img4">
          <p className='bgi4'>Img 4</p>
        </div>

        <div className="img img5">
          <p className='bgi5'>Img 5</p>
        </div>
      </div>
    </section>
    <section>
        <Circle />
    </section>
</>
  )
}

export default Home;