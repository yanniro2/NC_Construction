import { Link, useNavigate } from 'react-router-dom';
import login_img from "../Img/login.jpg";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
function LoginPage()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) =>
    {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) =>
            {
                console.log(userCredential);
                // setError("Login Success");
                alert("Login Successfully ✔")
                navigate("/");

            })
            .catch((error) =>
            {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
                setError(errorCode, errorMessage);
            });
    };



    return (
        <div className='w-full h-screen pt-[6rem] px-5 pb-2 flex items-center justify-center font-open'>

            <div className='w-full h-full flex items-center justify-center rounded overflow-hidden shadow-2xl m-10'>
                <div className='w-1/2 h-full overflow-hidden'>
                    <img src={login_img} alt="login img" className='object-cover' />
                </div>
                <div className='w-1/2 h-full flex flex-col  p-5 gap-5 justify-center'>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                        <h1 className='text-[2rem]  font-popins font-lg '>Login</h1>
                        <div className=' capitalize leading-4 text-[red] font-popins font-md'>{error && <p>{error}</p>}</div>

                        <div className='flex flex-col font-md gap-2'>
                            <label htmlFor="email" className='text-[18px] font-lg'>Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder='john123@gmail.com'
                                className='border-[2px] rounded-2xl p-2 border-light-gray outline-none'
                            />
                        </div>
                        <div className='flex flex-col font-md gap-2'>
                            <label htmlFor="email" className='text-[18px] font-lg'>Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                className='border-[2px] rounded-2xl p-2 border-light-gray outline-none'
                            />
                        </div>
                        <button type="submit" className=' bg-blue p-2 rounded-full font-xl text-white text-[1.2rem]'>Login</button>
                    </form>
                    <p>
                        Don't have an account? <Link to="/register" className='font-xl'>Register</Link>
                    </p>
                </div>
            </div>




        </div>
    );
}

export default LoginPage;
