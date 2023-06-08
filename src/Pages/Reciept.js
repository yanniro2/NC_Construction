import React from 'react'
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { auth } from '../firebase';

function Reciept()
{
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
    const data = {
        project: 'NC New Scall Project',
        manager: 'John Doe',
        startDate: '01/01/2022',
        endDate: '06/30/2022',
        progress: 75,
        budget: 100000,
        expenses: 75000,
        revenue: 125000
    };

    return (
        <div className='w-full h-full py-[6rem] px-5 font-open'>
            {user ? (<>
                <div className='text-[1.5rem] font-xl font-open uppercase p-5 text-dark-blue flex justify-between w-full'>
                    <header className='text-[2rem] font-xl'>
                        {data.project} Report
                    </header>
                    <button className='btn '>Print</button>
                </div>
                <div className='p-5'>
                    <p className="font-bold">Project Manager:</p>
                    <p>{data.manager}</p>
                    <h1 className="text-2xl font-bold mb-4"></h1>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <p className="font-bold">Start Date:</p>
                            <p>{data.startDate}</p>
                        </div>
                        <div>
                            <p className="font-bold">End Date:</p>
                            <p>{data.endDate}</p>
                        </div>
                        <div>
                            <p className="font-bold">Progress:</p>
                            <p>{data.progress}%</p>
                        </div>
                        <div>
                            <p className="font-bold">Budget:</p>
                            <p>${data.budget}</p>
                        </div>
                        <div>
                            <p className="font-bold">Expenses:</p>
                            <p>${data.expenses}</p>
                        </div>
                        <div>
                            <p className="font-bold">Revenue:</p>
                            <p>${data.revenue}</p>
                        </div>
                    </div>
                    <div className="border-t border-gray-300 pt-4">

                    </div>
                </div></>) : (<div className='w-screen h-screen absolute flex items-center justify-center top-0 left-0 right-0 bottom-0'>
                    <h1 className='h2'>You must  <Link to="/login" className='text-[red] underline'>log in</Link>  to access this content.</h1></div>)}

        </div>
    );
}

export default Reciept;
