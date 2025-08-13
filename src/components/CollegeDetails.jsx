export default function CollegeDetails() {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-start md:gap-[106px] md:mb-6 text-white text-sm ">
              <div className=" items-center gap-2 mb-4 md:mb-0 hidden md:flex opacity-50">
                <div className="w-[36px] h-[36px] rounded-full border-2 bg-[#D0A4FF] border-[#F1E4FF] flex items-center justify-center">
                  1
                </div>
                <div>
                  <p className=" text-[12px]">Step 1/2</p>
                  <p className="font-bold opacity-80 text-[16px]">Personal Details</p>
                </div>
              </div>
              <div className=" items-center gap-2  flex">
                <div className="w-[36px] h-[36px] rounded-full border-2 border-[#F1E4FF] bg-[#A35EEB] flex items-center justify-center">
                  2
                </div>
                <div>
                  <p className=" text-[12px]">Step 2/2</p>
                  <p className="font-bold text-[16px]">College Details</p>
                </div>
              </div>
            </div>
  
            <form className="flex flex-col gap-[20px] ">
              <div className="flex flex-col md:flex-row gap-[20px] ">
              <input
                type="text"
                placeholder="State*"
                className=" border-1 flex-1 max-w-full border-[F1E4FF] rounded-md px-4 py-2 text-white placeholder-[#F1E4FF] placeholder:text-[16px]  focus:outline-none"
              />
              <input
                type="text"
                placeholder="District*"
                className=" border-1 flex-1 max-w-full border-[F1E4FF] rounded-md px-4 py-2 text-white placeholder-[#F1E4FF] placeholder:text-[16px]  focus:outline-none"
              />
              </div>
              <input
                type="text"
                placeholder="College Name*"
                className=" border-1 border-[F1E4FF] rounded-md px-4 py-2 text-white placeholder-[#F1E4FF] placeholder:text-[16px]  focus:outline-none"
              />
              <div className="flex flex-col md:flex-row gap-[20px] justify-between">
              <input
                type="text"
                placeholder="Branch*"
                className=" border-1 grow  border-[F1E4FF] rounded-md px-4 py-2 text-white placeholder-[#F1E4FF] placeholder:text-[16px]  focus:outline-none"
              />
              <input
                type="text"
                placeholder="Year*"
                className=" border-1 grow  border-[F1E4FF] rounded-md px-4 py-2 text-white placeholder-[#F1E4FF] placeholder:text-[16px]  focus:outline-none"
              />
              </div>
            </form>
  
            <div className="flex justify-center md:justify-end gap-4 mt-3 md:self-end ">
              <button
                type="submit"
                className="px-8 py-2 w-[150px] flex justify-center items-center !rounded-[33px] !font-extrabold h-[40px] bg-gradient-to-r from-[#9359D0] via-[#D1A6FF] to-[#9950E7] text-white text-[12.51px] md:text-[15px]  shadow-md hover:opacity-90 transition"
              >
                SUBMIT
              </button>
            </div>
        </>
    );
  }
  