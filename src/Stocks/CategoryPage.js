
import React, { useState } from 'react';
import products from "../Datas/stockDatas";

function CategoryPage({ handleView })
{
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
        const totalPrice = items.reduce((total, item) => total + item.price, 0);
        setTotalPrice(totalPrice);
    };

    return (
        <div className='w-full h-full  px-5 flex gap-5'>
            <div className='w-max h-full'>
                <h2 className='h2 py-5  w-full justify-between flex items-center'>Stock Items

                    <button className='btn' onClick={handleView}>Add/Edit</button></h2>

                <div className='w-full h-full flex flex-wrap gap-5'>
                    {products.map((product) => (
                        <div key={product.id} className='w-[15rem] h-[15rem]  border-2 border-light-blue p-5 rounded shadow flex justify-between flex-col relative'>
                            <img src={product.img} alt="img" className='w-full h-full absolute top-0 left-0 bottom-0 right-0 object-cover z-[50]' />
                            <div className='flex justify-between z-[100] p-1 bg-light-gray text-white rounded'>
                                <h1 className=' font-open font-lg'>{product.name}</h1>
                                <p className=' font-popins text-[1.2rem]'>${product.price}</p>
                            </div>

                            <button onClick={() => handleAddProduct(product)} className='btn  px-2 py-1 rounded text-[1rem]   font-lg z-[100]'>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>

            {totalPrice !== 0 ? (<div className='w-flex flex-col bg-white drop-shadow p-5 rounded-xl mt-5 h-ful w-full h-max'>
                <h2 className='h2 w-full items-center text-center font-popins max-w-max pb-2'>Cart</h2>
                {selectedItems.length > 0 ? (
                    <div className='w-full flex flex-col gap-3'>
                        {selectedItems.map((item) => (
                            <div key={item.id} className=' bg-light-yellow p-3 rounded flex justify-between items-center'>
                                <div className='flex items-center gap-10'>
                                    <h3 className='h2 text-[1rem]'>{item.name}</h3>
                                    <h2 className='py-3 font-popins font-xl'>{item.price}$</h2>

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
