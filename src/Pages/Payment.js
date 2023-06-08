import React from 'react'
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { auth } from '../firebase';
function Payment({ stocksPayment, logisticPayment })
{
    const total = stocksPayment + logisticPayment;
    const location = useLocation();
    const details = location.state?.details;
    // const { price } = props.location.state;

    const [user, setUser] = useState(null);

    useEffect(() =>
    {
        const unsubscribe = auth.onAuthStateChanged((user) =>
        {
            setUser(user);
        });

        return () =>
        {
            unsubscribe();
        };
    }, []);

    return (
        <div className='w-full h-full py-[6rem] px-5 flex justify-center flex-col relative'>
            {user ? (<>
                <div className='text-center text-[1.5rem] font-xl font-open uppercase p-5 text-dark-blue flex justify-between w-full'>
                    <header className='text-[2rem] font-xl'>Payment</header>
                    <div className='btn bg-blue text-white capitalize'
                    >
                        {/* total {price}$ */} total  {total}$
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <form className='w-1/2 h-full p-5'>
                        <div class="mb-4">
                            <label class="label" for="name">
                                Name on Card
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="John Doe" />
                        </div>
                        <div class="mb-4">
                            <label class="label" for="email">
                                Email
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="john@example.com" />
                        </div>
                        <div class="mb-4">
                            <label class="label" for="card">
                                Card Number
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="card" type="text" placeholder="4242 4242 4242 4242" />
                        </div>
                        <div class="mb-4">
                            <label class="label" for="expiry">
                                Expiry Date
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="expiry" type="text" placeholder="MM/YY" />
                        </div>
                        <div class="mb-4">
                            <label class="label" for="cvv">
                                CVV
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cvv" type="text" placeholder="123" />
                        </div>
                        <button class="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Pay Now
                        </button>
                    </form>
                </div></>) : (<div className='w-screen h-screen absolute flex items-center justify-center top-0 left-0 right-0 bottom-0'>

                    <h1 className='h2'>You must  <Link to="/login" className='text-[red] underline'>log in</Link>  to access this content.</h1></div>)}



        </div>
    )
}

export default Payment
