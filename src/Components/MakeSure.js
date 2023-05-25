import React from 'react'

function MakeSure({ handleDelete, handlePopup })
{
    return (
        <div className='w-screen h-screen backdrop-blur-md fixed top-0 left-0 right-0 bottom-0 z-[9999] flex items-center justify-center font-open'>
            <div className='w-1/3 h-1/3 bg-white drop-shadow rounded-md flex flex-col items-center justify-evenly'>
                <h1 className='text-[1.5rem]  font-lg'>Are you sure Delete  this ?</h1>

                <div className='flex items-center gap-5 capitalize'>
                    <button className='btn ' onClick={handleDelete}>Yes</button>
                    <button className='btn bg-yellow' onClick={handlePopup}>No</button>
                </div>
            </div>
        </div>
    )
}

export default MakeSure
