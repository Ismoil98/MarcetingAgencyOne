import Navbar from '../navbar/Navbar'

const About = () => {
  return (
    <div className='text-white relative bg-mainBg pt-[61px] px-5 pb-[110px] mb-2 rounded-custom'>
      <Navbar />
      <h2 className='text-white font-semibold text-[52px] leading-[59px] w-[60%]'>
        Мы работаем с компаниями, готовыми к изменениям сегодня, <span className='opacity-[40%]'> чтобы стать драйвером отрасли завтра.</span>
      </h2>
      <img className='mt-[26px] mb-[108px] rounded-custom w-full h-[564px] object-cover' src="./about.jpg" alt="working image" />
      <div className='flex items-start mb-[126px]'>
        <h3 className='text-[24px] leading-[31px] w-[32%]'>
          Наш подход
        </h3>
        <p className='text-[40px] leading-[52px] w-[67%]'>
        Наши решения основаны <br /> на исследованиях и глубоком понимании <br /> трендов, нацелены на изменения, инновации <br /> в бизнесе и улучшение жизни людей.
        </p>
      </div>
      <div className='flex items-start mb-[250px]'>
        <h3 className='text-[24px] leading-[31px] w-[32%]'>
          Наш подход
        </h3>
        <ul className='text-[40px] leading-[52px] w-[67%] flex flex-wrap'>
          <li className='w-[50%] mb-[48px]'>
            <p className='text-[64px] leading-[59px] mb-2'>
              75
            </p>
            <h4 className='text-[16px] leading-[21px]'>
              Креативных профессионалов
            </h4>
          </li>
          <li className='w-[50%] mb-[48px]'>
            <p className='text-[64px] leading-[59px] mb-2'>
              24
            </p>
            <h4 className='text-[16px] leading-[21px]'>
              Года на рынке
            </h4>
          </li>
          <li className='w-[50%] mb-[48px]'>
            <p className='text-[64px] leading-[59px] mb-2'>
              190+
            </p>
            <h4 className='text-[16px] leading-[21px]'>
              Креативных профессионалов
            </h4>
          </li>
          <li className='w-[50%] mb-[48px]'>
            <p className='text-[64px] leading-[59px] mb-2'>
              500+
            </p>
            <h4 className='text-[16px] leading-[21px]'>
              Креативных профессионалов
            </h4>
          </li>
        </ul>
      </div>
      <div className='flex items-start mb-[120px]'>
        <h3 className='text-[24px] leading-[31px] w-[32%]'>
          Награды
        </h3>
        <p className='text-[40px] leading-[52px] w-[67%]'>
          Cannes Lions, Awwwards, The FWA, EDA, Red <br /> Dot, ADCE и другие международные и <br /> локальные награды.
        </p>
      </div>
      <h2 className='text-[52px] leading-[59px] mb-[63px]'>
        Создаём стратегии для запуска продуктов и продвижения брендов, разрабатываем визуальные системы идентификации <span className='opacity-[40%]'>и помогаем компаниям полностью реализовывать свой потенциал в digital.</span>
      </h2>
      <div>
        <div>
          Стратегии и исследования будущего  
        </div>
        <div>
          Брендинг и коммуникации
        </div>
        <div>
          Цифровые продукты
        </div>
      </div>
    </div>
  )
}

export default About