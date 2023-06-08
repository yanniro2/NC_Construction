
import React, { useState, useEffect } from 'react';
import { db } from '../firebase'
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
function CategoryPage({ handleView })
{
    const [tasks, setTasks] = useState([])
    useEffect(() =>
    {
        const q = query(collection(db, 'Logistics'), orderBy('created', 'desc'))
        onSnapshot(q, (querySnapshot) =>
        {
            setTasks(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])



    const [selectedItems, setSelectedItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    // Function to handle adding a product
    const handleAddProduct = (item) =>
    {
        const updatedItems = [...selectedItems, item];
        setSelectedItems(updatedItems);
        calculateTotalPrice(updatedItems);
    };

    // Function to handle removing a product
    const handleRemoveProduct = (item) =>
    {
        const updatedItems = selectedItems.filter((selectedItem) => selectedItem.id !== item.id);
        setSelectedItems(updatedItems);
        calculateTotalPrice(updatedItems);
    };

    // Function to calculate the total price
    const calculateTotalPrice = (items) =>
    {
        const totalPrice = items.reduce((total, item) => total + Number(item.data.price), 0);
        setTotalPrice(totalPrice);
    };

    return (
        <div className='w-full h-full  px-5 flex gap-5 '>
            <div className='w-full h-full'>
                <h2 className='h2 py-5  w-full justify-between flex items-center '>Logistics

                    <button className='btn' onClick={handleView}>Add/Edit</button></h2>

                <div className='w-full h-full flex flex-wrap gap-5'>
                    {tasks.map((product) => (
                        <div key={product.id} className='w-[15rem] h-[15rem]  border-2 border-light-blue p-5 rounded shadow flex justify-between flex-col relative'>
                            <img src={product.data.vImg} alt="img" className='w-full h-full absolute top-0 left-0 bottom-0 right-0 object-cover z-[50]' />
                            <div className='flex justify-between z-[100] p-2 bg-light-gray text-white rounded flex-col w-full gap-2 '>
                                <h1 className=' font-open font-lg'>{product.data.vtype}</h1>
                                <p className=' font-popins text-[1.2rem]'>${product.data.price}</p>
                            </div>

                            <button onClick={() => handleAddProduct(product)} className='btn  px-2 py-1 rounded text-[1rem]   font-lg z-[100]'>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>

            {totalPrice !== 0 ? (<div className=' flex-col bg-white drop-shadow p-5 rounded-xl mt-5  w-auto h-max'>
                <h2 className='h2 w-full items-center text-center font-popins max-w-max pb-2'>Cart</h2>
                {selectedItems.length > 0 ? (
                    <div className='w-full flex flex-col gap-3'>
                        {selectedItems.map((item) => (
                            <div key={item.id} className=' bg-light-yellow p-3 rounded flex justify-between items-center'>
                                <div className='flex items-center gap-10'>
                                    <h3 className='h2 text-[1rem]'>{item.data.vtype}</h3>
                                    <h2 className='py-3 font-popins font-xl'>{item.data.price}$</h2>

                                </div>

                                <button onClick={() => handleRemoveProduct(item)} className='btn text-[1rem] py-1 bg-[orange]'>Remove</button>
                            </div>


                        ))}
                    </div >
                ) : (
                    <p>No items in the cart</p>
                )}

                <div className='w-ful flex items-center justify-between'>
                    <div className='flex gap-3'>
                        <h2 className='py-3 font-popins font-xl'>Total Price: </h2>

                        <p className='py-3 font-popins font-xl'>${totalPrice}</p>
                    </div>


                    <button className='btn m-1 py-1 px-5 flex items-center text-[1rem]'>Payment</button>
                </div>

            </div>) : (<></>)}

        </div>
    );
}

export default CategoryPage;
