import React, { useState } from 'react'
import AuthLayout from "../../components/layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';

const SignUp = () => {
    const [profilePic, setProfilePic] = useState(null);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };

    // Handle Sign Up Form Submit
    const handleSignUp = async (e) => {

      if(!fullName) {
        setError("Please enter your name");
        return; 
      }

      if(!validateEmail(email)) {
        setError("Please enter the valid email address"); 
        return; 
      }

      if(!password) {
        setError("Please ente the password"); 
        return; 
      }

      setError("");


    }
      return (
      <AuthLayout >

        <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-black">Create an Account</h3>
            <p className="text-xs text-slate-700 mt-[5px] mb-6">
                Join us today by entering your details below.
            </p>

            <form onSubmit={handleSignUp}>

                <ProfilePhotoSelector
                      image={profilePic} 
                      setImage={setProfilePic} 
                />


                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        label="Full Name"
                        placeholder="John"
                        type="text"
                    />

                    <Input
                      value={email}
                      onChange={({ target }) => setEmail(target.value)}
                      label="Email Address"
                      placeholder="abc@example.com"
                      type="text"
                    />
                    <div className='col-span-2'>
                      
                    <Input
                      value={password}
                      onChange={({ target }) => setPassword(target.value)}
                      label="Password"
                      placeholder="Enter your password"
                      type="password"
                    />

                    </div>
                </div>

                  {error && (
                            <p className="text-red-500 text-sm mt-2 mb-2">{error}</p>
                          )}
                
                          <button type="submit" className="btn-primary mt-4">
                            SIGN UP
                          </button>
                
                          <p className="text-[13px] text-slate-800 mt-3">
                            Already have an account?{" "}
                            <Link
                              className="font-medium text-purple-500 underline"
                              to="/login"
                            >
                              login
                            </Link>
                        </p>
            </form>


        </div>

      </AuthLayout>
      )

    }


export default SignUp