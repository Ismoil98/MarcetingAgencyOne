import { RiArrowRightLine } from "react-icons/ri";

const Hiro = () => {
  return (
    <section className='bg-white mb-2 rounded-custom py-7 px-8'>
      <div className='mb-[230px] flex justify-between items-center'>
        <a href="#">
          <img className='ml-8' src="./logo.svg" alt="logo site" />
        </a>
        <div className='flex justify-between items-center gap-5 text-[16px] font-medium leading-[20px]'>
          <a className='text-[16px] font-medium leading-[20px] duration-300 hover:underline underline-offset-4' href="tel:+998946093444">+998 94 609-34-44</a>
          <button className='rounded-second bg-blackSecond text-white border border-black duration-300 hover:text-black hover:bg-white py-5 px-6'>
            Оставить заявку
          </button>
        </div>
      </div>
      <h1 className='text-black font-semibold text-[52px] leading-[59px] w-[60%]'>
        Привет. Мы — небольшая группа опытных креативщиков и стратегов <span className='opacity-[40%]'>с опытом создания брендов для молодых предприятий.</span>
      </h1>
      <div className='flex items-end justify-between'>
        <ul className='flex gap-[17px] text-[24px] leading-[31px]'>
          <li>
            <span className='text-purpleSecond'>•</span> UX/UI design
          </li>
          <li>
            <span className='text-purpleSecond'>•</span> Research
          </li>
          <li>
            <span className='text-purpleSecond'>•</span> Outstaffing
          </li>
          <li>
            <span className='text-purpleSecond'>•</span> Design system
          </li>
        </ul>
        <div className='pr-[76px] relative'>
          <img src="./avatarka.png" alt="avatarka" />
          <div className='w-[112px] h-[112px] bg-white rounded-full absolute top-[-6px] left-[70px]'>
              <div className='bg-mainBg w-[100px] h-[100px] rounded-full ml-[6px] mt-[6px]'>
                
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hiro