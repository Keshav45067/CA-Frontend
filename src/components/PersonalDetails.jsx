export default function PersonalDetails() {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-start md:gap-[106px] md:mb-6 text-white text-sm ">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <div className="w-[36px] h-[36px] rounded-full border-2 bg-[#A35EEB] border-[#F1E4FF] flex items-center justify-center">
                  1
                </div>
                <div>
                  <p className=" text-[12px]">Step 1/2</p>
                  <p className="font-bold opacity-80 text-[16px]">Personal Details</p>
                </div>
              </div>
              <div className=" items-center gap-2 opacity-50 hidden md:flex">
                <div className="w-[36px] h-[36px] rounded-full border-2 border-[#F1E4FF] flex items-center justify-center">
                  2
                </div>
                <div>
                  <p className=" text-[12px]">Step 2/2</p>
                  <p className="font-bold text-[16px]">College Details</p>
                </div>
              </div>
            </div>
  
            <form className="grid grid-cols-1 md:grid-cols-2 gap-[20px] ">
              <input
                type="text"
                placeholder="Name*"
                className=" border-1 border-[F1E4FF] rounded-md px-4 py-2 text-white placeholder-[#F1E4FF] placeholder:text-[16px]  focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email ID*"
                className=" border-1 border-[F1E4FF] rounded-md px-4 py-2 text-white placeholder-[#F1E4FF] placeholder:text-[16px]  focus:outline-none"
              />
              <input
                type="text"
                placeholder="Gender*"
                className=" border-1 border-[F1E4FF] rounded-md px-4 py-2 text-white placeholder-[#F1E4FF] placeholder:text-[16px]  focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number*"
                className=" border-1 border-[F1E4FF] rounded-md px-4 py-2 text-white placeholder-[#F1E4FF] placeholder:text-[16px]  focus:outline-none"
              />
              <input
                type="password"
                placeholder="Create Password*"
                className=" border-1 border-[F1E4FF] rounded-md px-4 py-2 text-white placeholder-[#F1E4FF] placeholder:text-[16px]  focus:outline-none"
              />
              <input
                type="password"
                placeholder="Confirm Password*"
                className=" border-1 border-[F1E4FF] rounded-md px-4 py-2 text-white placeholder-[#F1E4FF] placeholder:text-[16px]  focus:outline-none"
              />
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
  