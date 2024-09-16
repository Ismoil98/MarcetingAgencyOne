import React from 'react'

const Footer = () => {
  return (
    <div className='bg-third rounded-custom pt-[260px] pb-12 px-8'>
        <h2 className='text-white text-[151px] mb-[122px]'>
          Обсудить проект
        </h2>
        <a className='text-[24px] leading-[31px] mb-4 block' href="tel:+998946093444">+998 94 609-34-44</a>
        <a className='' href="mailto:company@name.com">company@name.com</a>
        <div className='flex items-end justify-between'>
          <p className='text-[214px] text-white leading-[276px] mt-[65px]'>©2024</p>
          <a href="">Made by Getter IT and Innovative ideas</a>
          <ul>
            <li>Instagram</li>
            <li>Telegram</li>
            <li>Linkedin</li>
            <li>Behance</li>
          </ul>
        </div>
    </div>
  )
}

export default Footer