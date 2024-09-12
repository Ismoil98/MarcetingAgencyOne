import { RiArrowRightLine } from "react-icons/ri";


const Cases = () => {
  return (
    <div className='bg-white rounded-custom pt-[54px] pb-[86px] px-5 mb-2'>
        <div className="flex items-center mb-[37px] underline underline-offset-[10px]">
          <h2 className="font-semibold text-[40px] leading-[52px] ">
            Кейсы
          </h2>
          <RiArrowRightLine className="w-6 h-6"/>
        </div>
        <ul className="flex flex-wrap gap-[2%]">
          <li className="w-[49%]"> 
              <img className="w-full" src="./cases1.png" alt="cases image" />
              <h2 className="font-medium text-[24px] leading-[31px] mt-3">
                Health and beauty clinic
              </h2>
              <p className="text-[16px] leading-[21px] opacity-[40%]">
                Greece
              </p>
          </li>
          <li className="w-[49%]"> 
              <img className="w-full" src="./cases2.png" alt="cases image" />
              <h2 className="font-medium text-[24px] leading-[31px] mt-3">
                Health and beauty clinic
              </h2>
              <p className="text-[16px] leading-[21px] opacity-[40%]">
                Greece
              </p>
          </li>
          <li className="w-[49%]"> 
              <img className="w-full" src="./cases3.png" alt="cases image" />
              <h2 className="font-medium text-[24px] leading-[31px] mt-3">
                Health and beauty clinic
              </h2>
              <p className="text-[16px] leading-[21px] opacity-[40%]">
                Greece
              </p>
          </li>
          <li className="w-[49%]"> 
              <img className="w-full" src="./cases4.png" alt="cases image" />
              <h2 className="font-medium text-[24px] leading-[31px] mt-3">
                Health and beauty clinic
              </h2>
              <p className="text-[16px] leading-[21px] opacity-[40%]">
                Greece
              </p>
          </li>
        </ul>
    </div>
  )
}

export default Cases