import React from 'react'

const Hiro = () => {
  return (
    <section className='bg-white mb-2 rounded-custom py-7 px-8'>
      <div className='mb-[230px] flex justify-between items-center'>
        <a href="#">
          <img className='ml-8' src="./logo.svg" alt="logo site" />
        </a>
        <div className='flex justify-between items-center gap-5 text-[16px] font-medium leading-[20px]'>
          <a className='text-[16px] font-medium leading-[20px]' href="tel:+998946093444">+998 94 609-34-44</a>
          <button className='rounded-second bg-blackSecond text-white py-5 px-6'>
            Оставить заявку
          </button>
        </div>
      </div>
      <h1 className='text-black font-semibold text-[52px] leading-[59px] w-[60%]'>
        Привет. Мы — небольшая группа опытных креативщиков и стратегов <span className='opacity-[40%]'>с опытом создания брендов для молодых предприятий.</span>
      </h1>
    </section>
  )
}

export default Hiro