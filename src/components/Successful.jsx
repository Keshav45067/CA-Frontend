export default function Successful({heading, text, button, url}){
    return (
        <div className='flex flex-col justify-center items-center'>
        <h1 className="text-[20px] md:text-[28px] font-bold text-[#A671DF] ">{heading}</h1>
        
        {/* Description */}
        <p className="text-gray-300 mb-4 text-[12px] md:text-[16px] text-center w-2/3">
         {text}
        </p>
        
        <button className="px-8 py-2 flex justify-center items-center !rounded-[33px] !font-extrabold h-[40px] bg-gradient-to-r from-[#9359D0] via-[#D1A6FF] to-[#9950E7] text-white text-[12.51px] md:text-[15px]  shadow-md hover:opacity-90 transition mb-4">
          {button}
        </button>
        </div>
    )
}