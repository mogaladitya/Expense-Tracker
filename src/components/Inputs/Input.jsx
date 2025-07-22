import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

// A reusable Input component with a label and password visibility toggle
const Input = ({ value, onChange, placeholder, label, type }) => {
  // State to manage whether the password text is shown or hidden
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      {/* Input field label */}
      <label className="text-[13px] text-slate-800">{label}</label>
      
      {/* Container for the input and visibility icon */}
      <div className="input-box">
        <input
          // If the type is 'password', its type is toggled based on `showPassword` state
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none"
          value={value}
          onChange={(e) => onChange(e)}
        />
        
        {/* Conditionally render the eye icon only for password fields */}
        {type === "password" && (
          <>
            {showPassword ? (
              // Eye icon to hide the password
              <FaRegEye
                size={22}
                className="text-primary cursor-pointer"
                onClick={toggleShowPassword}
              />
            ) : (
              // Eye-slash icon to show the password
              <FaRegEyeSlash
                size={22}
                className="text-slate-400 cursor-pointer"
                onClick={toggleShowPassword}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
