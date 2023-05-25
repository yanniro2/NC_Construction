import { Link, useNavigate } from "react-router-dom";
import Register_img from "../Img/register.jpg"
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
const RegisterPage = () =>
{

    const [email, setEmail] = useState('');
    const [username, setUsrname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password, username)
            .then((userCredential) =>
            {
                console.log(userCredential);
                setError("ADD Scuessfully");
                navigate("/")

            })
            .catch((error) =>
            {
                console.log(error);
                setError(error);
            });

        // console.log(username, email, password, confirmPassword);
    };

    return (
        <div className='w-full h-screen pt-[6rem] px-5 pb-2 flex items-center justify-center font-open '>
            <div className='w-full h-full flex items-center justify-center rounded overflow-hidden shadow-2xl m-10'>
                <div className="w-1/2 h-full overflow-hidden">
                    <img src={Register_img} alt="" className="w-full h-full object-cover" />
                </div>
                <div className='w-1/2 h-full flex flex-col  p-5 gap-5 justify-center'>
                    <h1 className='text-[2rem]  font-popins font-lg '>Register Page</h1>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                        <div className='flex flex-col font-md gap-1'>
                            <label className='text-[18px] font-lg'>
                                Username:
                            </label>
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={(event) => setUsrname(event.target.value)}
                                required
                                className='border-[2px] rounded-2xl p-2 border-light-gray outline-none'
                            />
                        </div>

                        <div className='flex flex-col font-md gap-1'>
                            <label className='text-[18px] font-lg'>
                                Email:

                            </label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                                className='border-[2px] rounded-2xl p-2 border-light-gray outline-none'
                            />
                        </div>

                        <div className='flex flex-col font-md gap-1'>
                            <label className='text-[18px] font-lg'>
                                Password:

                            </label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required
                                className='border-[2px] rounded-2xl p-2 border-light-gray outline-none'
                            />
                        </div>

                        <div className='flex flex-col font-md gap-1'>
                            <label className='text-[18px] font-lg'>
                                Confirm Password:

                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={(event) => setConfirmPassword(event.target.value)}
                                required
                                className='border-[2px] rounded-2xl p-2 border-light-gray outline-none'
                            />
                        </div>
                        <div className=" text-[2.5rem] text-[red]">{error}</div>

                        <button type="submit" className=' bg-yellow p-2 rounded-full font-xl text-[1.2rem] w-full '>Register</button>
                    </form>
                    <p>
                        Already have an account? <Link to="/login" className='font-xl'>Login</Link>
                    </p></div>

            </div>

        </div>
    );
};

export default RegisterPage;
