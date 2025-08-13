import PersonalDetails from "../components/PersonalDetails";
import Bg from "../assets/BG2.mov"
import thomsoLogo from "../assets/Thomso.png"
import CollegeDetails from "../components/CollegeDetails";
import OTP from "../components/OTP";
import Successful from "../components/Successful";

export default function Registration() {
    return (
      <div className="z-1 min-h-screen min-w-screen flex flex-col items-center justify-center relative overflow-hidden bg-cover bg-center"
      //  style={{ backgroundImage: `url(${gradient})` }}
      >
        <video
          className="z-[-100] opacity-80 absolute top-0 left-0 w-full h-full object-cover"
          src={Bg}       // or src="https://example.com/video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Gradient wave effect */}
        <div className="inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-700/40 via-transparent to-transparent blur-3xl"></div>
        <div className="flex justify-between w-full absolute top-6 px-10">
          {/* Logo */}
          <div className="">
            <img src={thomsoLogo} alt="Logo" className="w-[74px] md:w-[110px]" />
          </div>
  
          {/* Login Button */}
          <div className="">
            <button className="px-6 py-2 flex items-center justify-center !rounded-[33px] h-[34px] md:h-[40px] w-[130px] md:w-[160px] bg-gradient-to-r from-[#9359D0] via-[#D1A6FF] to-[#9950E7] text-white text-[12.51px] md:text-[15px] !font-extrabold shadow-md">
              LOGIN
            </button>
          </div>
        </div>
  
        {/* Title */}
        <h1 className="text-white font-[romance] md:text-[50px] text-[28px]  font-bold mb-4 md:mb-8 text-center" style={{ textShadow: '4.71px 8.6px 4px rgba(0,0,0,0.25)' }}>
          Registration
        </h1>
  
        {/* Glassy Form Container */}
        <div className="z-10 flex flex-col justify-center items-center bg-gradient-to-r from-[#D45EFF]/10 via-[#EBB5FF]/10 to-[#D45EFF]/10 backdrop-blur-lg  border border-white/10 rounded-3xl py-6 w-4/5 md:w-3/5 max-w-[1080px] min-h-[428px] md:min-w-[600px] mx-10 h-fit shadow-[0_21px_6px_0_rgba(0,0,0,0.2)]">
          <div className="w-3/4 gap-5 flex flex-col h-fit">
            {/* <PersonalDetails/> */}
            {/* <CollegeDetails/> */}
            <OTP/>
            {/* <Successful heading={"Email Verified Successfully!"} text={"Voila! You have successfully verified your account."} button={"Continue Registration"}/> */}
          </div>
        </div>
      </div>
    );
  }
  