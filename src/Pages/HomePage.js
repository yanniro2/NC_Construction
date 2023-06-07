import React from 'react';
import img from "../../src/Img/bg-hero.jpg"

function HomePage()
{
    return (
        <div className='w-full h-full pt-[6rem] px-5 pb-2'>
            <img src={img} alt="img" className=' w-screen h-screen object-cover  ' />
            <section className="bg-dark-blue text-white py-16 ">
                <div className="container mx-auto text-center absolute z-[1000] w-screen h-screen top-0 bottom-0 left-0 right-0  flex items-center flex-col justify-center">

                    <div className='bg-light-gray p-2 rounded'>
                        <h1 className="text-[2rem] font-xl mb-4 uppercase tracking-wider">Welcome to NC Construction</h1>
                        <p className=" text-[1.2rem] mb-8">Building quality projects with integrity</p>
                        <a href="/contact" className="inline-block bg-white text-dark-blue py-2 px-4 rounded hover:bg-blue-600">Contact Us</a>
                    </div>
                </div>
            </section>
            <section className="mt-12">
                <div className="w-full flex  gap-5 p-5">
                    <div className="bg-white rounded shadow p-6">
                        <h2 className="text-2xl font-bold text-dark-blue mb-4">Our Services</h2>
                        <p className="text-dark-blue">
                            We provide a wide range of construction services, including residential and commercial construction, remodeling, and renovations. Our team of skilled professionals is dedicated to delivering high-quality workmanship and exceptional customer service.
                        </p>
                        <a href="/services" className="mt-4 inline-block bg-dark-blue text-white py-2 px-4 rounded hover:bg-dark-blue">Learn More</a>
                    </div>

                    <div className="bg-white rounded shadow p-6">
                        <h2 className="text-2xl font-bold text-dark-blue mb-4">Our Projects</h2>
                        <p className="text-dark-blue">
                            Take a look at our completed projects that showcase our expertise and attention to detail. We have successfully delivered residential, commercial, and industrial projects of varying scales, always meeting our clients' expectations.
                        </p>
                        <a href="/projects" className="mt-4 inline-block bg-dark-blue text-white py-2 px-4 rounded hover:bg-dark-blue">View Projects</a>
                    </div>
                </div>

            </section>
            <footer className="bg-dark-blue text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} NC Construction. All rights reserved.</p>
                </div>
            </footer>

        </div>
    );
}

export default HomePage;
