import React from 'react'
import { AiFillInstagram , AiOutlineTwitter , AiFillYoutube , AiFillFacebook } from 'react-icons/ai';


const Footer =() => {
  return (
    <div className='footer-container'>
      <p>2022 Headphones and Mobiles All Rights Reserved</p> 
      <p className='icons' >
        <AiFillFacebook />
        <AiFillInstagram />
        <AiFillYoutube />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer