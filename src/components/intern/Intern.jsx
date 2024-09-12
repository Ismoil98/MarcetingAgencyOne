import React from 'react'

const Intern = () => {
  return (
    <div className={`bg-second bg-[url('/intern.png')] bg-no-repeat bg-right rounded-custom mb-2 text-white pt-[51px] pb-[84px] px-8`} style={{ backgroundPosition: 'right 40px center' }}>
        <h2 className='text-blackfour text-[52px] font-semibold leading-[59px] w-[80%]'>
            Мы предлагаем онлайн стажировку в нашем агенстве <span className='opacity-[40%]'>потегциальным дизайнерам</span>
        </h2>
    </div>
  )
}

export default Intern