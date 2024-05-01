import React from 'react'

const BounseIMageS = () => {
  return (
    <fieldset>
        <label style="--_img: url(https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)">
          <input type="radio" name="images" value="Fiddle Leaf" />
        </label>
        <label style="--_img: url(https://images.pexels.com/photos/1444620/pexels-photo-1444620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)">
          <input type="radio" name="images" value="Pink Princess" />
        </label>
        <label style="--_img: url(https://images.pexels.com/photos/1819713/pexels-photo-1819713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)">
          <input type="radio" name="images" value="Monstera" checked />
        </label>
        <label style="--_img: url(https://images.pexels.com/photos/1680255/pexels-photo-1680255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)">
          <input type="radio" name="images" value="Pothos" />
        </label>
        <label style="--_img: url(https://images.pexels.com/photos/1089455/pexels-photo-1089455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)">
          <input type="radio" name="images" value="Rubber Tree" />
        </label>
    </fieldset>
  )
}

export default BounseIMageS