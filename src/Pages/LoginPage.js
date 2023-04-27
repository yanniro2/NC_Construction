import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import login_img from "../Img/login.jpg";
function LoginPage()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) =>
    {
        event.preventDefault();

        // TODO: Implement login logic here
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            navigate('/');
        } else {
            setError('Invalid email or password');
        }
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
                        {error && <p>{error}</p>}
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
