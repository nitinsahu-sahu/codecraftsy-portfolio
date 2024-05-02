import React from 'react'
import { GiTechnoHeart } from "react-icons/gi";
import { IoRocketOutline } from "react-icons/io5";


const SingleProjectCard = () => {
  return (
    <div className="container-fluid">
      <div className='row my-5'>
        <div className="d-flex justify-content-center col-sm-6 col-md-6 col-lg-6 ">
          <div className='outer-circle position-relative'>
            <div className="inner-circle w-100 h-100 border border-info-subtle border-5 position-absolute">
              <img src='./kareo-mern.png' className='trans-mg w-100 h-100 position-absolute object-fit-cover' alt='kareo'/>
            </div>
          </div>
        </div>
        <div className='col-sm-6 col-md-6 col-lg-6 m-auto p-5'>
          <div className='border-start border-5 border-info'>
            <h1 style={{ paddingLeft: '5px' }}>Obastyle</h1>
          </div>
          <div className='my-2'>
            <div><GiTechnoHeart size={24} style={{color:"pink"}} /><span className='fs-5'> Technology: PrestaShopff</span></div>
          </div>
          <div className='fs-5'>
            <div><IoRocketOutline size={24} style={{color:"pink"}} /><span> Digital Marketing</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProjectCard