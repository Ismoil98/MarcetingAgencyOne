import './navbar.scss'

const Navbar = () => {
  return (
    <div className='fixer justify-between flex gap-1 bg-blackSecond rounded-second p-1 text-white w-[436px]'>
        <a href='#' className='py-[24px] px-[17px] whitespace-nowrap text-[14px] leading-[18px] hover:text-blackfour hover:bg-white duration-300 cursor-pointer rounded-second bg-blackThird'>О нас</a>
        <a href='#' className="py-[24px] px-[17px] whitespace-nowrap text-[14px] leading-[18px] hover:text-blackfour hover:bg-white duration-300 cursor-pointer rounded-second bg-blackThird">Услуги</a>
        <a href='#' className="py-[24px] px-[17px] whitespace-nowrap text-[14px] leading-[18px] hover:text-blackfour hover:bg-white duration-300 cursor-pointer rounded-second bg-blackThird">Команда</a>
        <a href='#' className="py-[24px] px-[17px] whitespace-nowrap text-[14px] leading-[18px] hover:text-blackfour hover:bg-white duration-300 cursor-pointer rounded-second bg-blackThird">Кейсы</a>
        <a href='#' className="py-[24px] px-[17px] whitespace-nowrap text-[14px] leading-[18px] hover:text-blackfour hover:bg-white duration-300 cursor-pointer rounded-second bg-blackThird">Контакты</a>
    </div>
  )
}

export default Navbar