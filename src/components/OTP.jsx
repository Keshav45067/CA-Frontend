import { useState, useRef } from 'react';

export default function OTP(){
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  
    // Function to handle single character input change
    const handleChange = (index, value) => {
      // Only accept a single digit or an empty string
      if (value.length <= 1 && /^\d?$/.test(value)) {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
  
        // Auto-focus to the next input field if a digit was entered
        if (value && index < 3) {
          inputRefs[index + 1].current.focus();
        }
      }
    };
  
    // Function to handle keydown events (e.g., backspace)
    const handleKeyDown = (index, e) => {
      if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
        inputRefs[index - 1].current.focus();
      }
    };
    
    // Function to handle pasting of multi-digit OTP
    const handlePaste = (e) => {
      e.preventDefault(); // Prevent the default paste action
      const pasteData = e.clipboardData.getData('text/plain');
      const numericValue = pasteData.replace(/[^0-9]/g, '');
  
      const newOtp = [...otp];
      for (let i = 0; i < numericValue.length && i < 4; i++) {
        newOtp[i] = numericValue.charAt(i);
      }
      setOtp(newOtp);
      
      // Focus on the next available input or the last one
      const nextIndex = Math.min(numericValue.length, 3);
      if (inputRefs[nextIndex]) {
        inputRefs[nextIndex].current.focus();
      }
    };
  
    return (
        <div className='flex flex-col justify-center items-center'>
        <h1 className="text-[20px] md:text-[28px] font-bold text-[#A671DF] mb-2">Wrong OTP</h1>
        
        {/* Description */}
        <p className="text-gray-300 mb-8 text-[12px] md:text-[16px] text-center w-2/3">
          A mail has been sent to the submitted email address. Check your inbox to verify your email address.
        </p>

        {/* OTP Input fields */}
        <div className="flex justify-center gap-4 mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              type="text"
              className="w-[40px] h-[40px] text-2xl text-center  bg-opacity-20 border-1 border-white text-white rounded-[2px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              maxLength="1"
            />
          ))}
        </div>
        
        {/* Verify button */}
        <button className="px-8 py-2 w-[150px] flex justify-center items-center !rounded-[33px] !font-extrabold h-[40px] bg-gradient-to-r from-[#9359D0] via-[#D1A6FF] to-[#9950E7] text-white text-[12.51px] md:text-[15px]  shadow-md hover:opacity-90 transition mb-4">
          VERIFY
        </button>
        
        {/* Resend link */}
        <p className="text-white text-[12px] md:text-[16px] text-bold mb-4">
          Haven't received OTP yet?{' '}
          <a href="#" className="text-[#A671DF] text-[12px] md:text-[16px] font-semibold hover:underline">
            Resend
          </a>
        </p>
        </div>
    )
}