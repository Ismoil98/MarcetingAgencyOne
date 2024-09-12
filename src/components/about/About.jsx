import React from 'react'
import Navbar from '../navbar/Navbar'

const About = () => {
  return (
    <div className='relative bg-mainBg pt-[61px] px-5 pb-[110px] mb-2 rounded-custom'>
      <Navbar />
      <h2 className='text-white font-semibold text-[52px] leading-[59px] w-[60%]'>
        Мы работаем с компаниями, готовыми к изменениям сегодня, <span className='opacity-[40%]'> чтобы стать драйвером отрасли завтра.</span>
      </h2>
      <img className='mt-[26px] mb-[108px] rounded-custom w-full h-[564px] object-cover' src="./about.jpg" alt="working image" />
    </div>
  )
}

export default About