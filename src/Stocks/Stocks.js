import { useState } from 'react'
import StockList from '../Stocks/StockList'
import EditStocks from '../Stocks/EditStocks'
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase'
import MakeSure from '../Components/MakeSure';
function Stocks({ id, name, price, img, completed })
{

    const [checked, setChecked] = useState(completed)
    const [open, setOpen] = useState({ edit: false, view: false })
    const [popup, setPopup] = useState(null);

    const handleClose = () =>
    {
        setOpen({ edit: false, view: false })
    }

    /* function to update document in firestore */
    const handleCheckedChange = async () =>
    {
        const taskDocRef = doc(db, 'stocks', id)
        try {
            await updateDoc(taskDocRef, {
                completed: checked
            })
        } catch (err) {
            alert(err)
        }
    }
    /* function to delete a document from firstore */
    const handleDelete = async () =>
    {
        const taskDocRef = doc(db, 'stocks', id)
        try {
            await deleteDoc(taskDocRef)
        } catch (err) {
            alert(err)
        }
    }

    const handlePopup = () =>
    {
        setPopup(!popup)
    }

    return (
        <div className=' rounded  shadow-md border-light-blue border-[2px] flex w-[15rem] h-[15rem] relative'>
            <img src={img} alt="" className='w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover z-[5]' />
            {/* <div className={`task ${checked && 'task--borderColor'}`}> */}
            {/* <div className='w-full h-full'> */}
            {/* <div>
                    <input
                        id={`checkbox-${id}`}
                        name="checkbox"
                        checked={checked}
                        onChange={handleCheckedChange}
                        type="checkbox"
                    />
                    <label
                        htmlFor={`checkbox-${id}`}
                        className="checkbox-custom-label"
                        onClick={() => setChecked(!checked)} ></label>
                </div> */}
            <div className='flex w-full h-full flex-wrap z-[50] '>
                <div className='w-full h-full flex  justify-evenly items-center flex-col text-[White] '>

                    <div className='flex flex-col gap-1 bg-light-gray rounded p-5' >
                        <p className="text-[1.2rem] font-xl capitalize z-[500]">

                            Name : {name}</p>
                        <p className="text-[1.2rem] font-xl capitalize">Price: {price}</p>
                    </div>

                    <div className='flex  gap-5 p-2' >
                        <button
                            onClick={() => setOpen({ ...open, view: true })}
                            className='btn-1'>
                            View
                        </button>
                        <button
                            className='btn-1 bg-dark-blue'
                            onClick={() => setOpen({ ...open, edit: true })}>
                            Edit
                        </button>
                        <button className='btn-1 bg-yellow text-black' onClick={handlePopup}>Delete</button>
                    </div>


                </div>
            </div>
            {
                open.view &&
                <StockList
                    onClose={handleClose}
                    price={price}
                    name={name}
                    img={img}
                    open={open.view}

                />
            }

            {
                open.edit &&
                <EditStocks
                    onClose={handleClose}
                    toEditprice={price}
                    toEditiname={name}
                    toEditimg={img}
                    open={open.edit}
                    id={id}

                />
            }

            {/* </div > */}
            {popup && <MakeSure handleDelete={handleDelete} handlePopup={handlePopup} />}
        </div >
    )
}

export default Stocks
