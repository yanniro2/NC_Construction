import { useState } from "react";
import { Link } from "react-router-dom";
import Register_img from "../Img/register.jpg"
const RegisterPage = () =>
{
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) =>
    {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        // TODO: Add form submission logic here
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
                                value={formData.username}
                                onChange={handleChange}
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
                                value={formData.email}
                                onChange={handleChange}
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
                                value={formData.password}
                                onChange={handleChange}
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
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                                className='border-[2px] rounded-2xl p-2 border-light-gray outline-none'
                            />
                        </div>

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
