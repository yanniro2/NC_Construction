import { useState } from 'react'
import StockList from '../Stocks/StockList'
import EditStocks from '../Stocks/EditStocks'
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase'
import { RiUser3Fill } from "react-icons/ri"
import MakeSure from '../Components/MakeSure';
function Stocks({ id, item, icode, completed })
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
        <div className=' rounded  shadow-md border-light-blue border-[2px] flex w-full'>
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
            <div className='flex w-full h-full flex-wrap '>
                <div className='w-full h-full flex  justify-evenly items-center'>

                    <div className='flex w-1/2 flex-col gap-1' >
                        <p className="text-[1.2rem] font-xl capitalize">

                            Name : {item}</p>
                        <p className="text-[1.2rem] font-xl capitalize">Item Code: {icode}</p>
                    </div>

                    <div className='flex w-1/2  justify-end gap-5 p-2' >
                        <button
                            onClick={() => setOpen({ ...open, view: true })}
                            className='btn-1'>
                            View
                        </button>
                        <button
                            className='btn-1 bg-light-gray'
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
                    item={item}
                    icode={icode}
                    open={open.view}

                />
            }

            {
                open.edit &&
                <EditStocks
                    onClose={handleClose}
                    toEdititem={item}
                    toEditicode={icode}
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
