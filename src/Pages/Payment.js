import React from 'react'

function Payment()
{
    return (
        <div className='w-full h-full py-[6rem] px-5 flex justify-center flex-col'>
            <div className='text-center text-[1.5rem] font-xl font-open uppercase p-5 text-dark-blue flex justify-between w-full'>
                <header className='text-[2rem] font-xl'>Payment</header>
                <div className='btn bg-blue text-white capitalize'
                >
                    total 250$
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
            </div>


        </div>
    )
}

export default Payment
