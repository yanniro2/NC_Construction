import { useState } from 'react'
import LogisticsList from '../Logistics/LogisticsList'
import EditLogistics from '../Logistics/EditLogistics'
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase'
import MakeSure from '../Components/MakeSure';
function Logistics({ id, vno, vid, vtype, completed, vCategory, vImg, price })
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
        const taskDocRef = doc(db, 'Logistics', id)
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
        const taskDocRef = doc(db, 'Logistics', id)
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
            <img src={vImg} alt="" className='w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover z-[5]' />
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
                <div className='w-full h-full flex  justify-evenly items-center flex-col text-[White] relative'>
                    <div className='absolute top-0 bottom-0 left-0 right-0 w-full h-full'>
                        <img src={vImg} alt="" className='w-full h-full object-cover' />
                        <p>{vImg}</p>
                    </div>

                    <div className='flex flex-col gap-1 bg-light-gray rounded p-5 z-[100]' >
                        <p className="text-[1.2rem] font-xl capitalize z-[500]">Vechile No : {vno}</p>
                        <p className="text-[1.2rem] font-xl capitalize">Vechile ID: {vid}</p>
                    </div>

                    <div className='flex  gap-5 p-2 z-[100]' >
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
                <LogisticsList
                    onClose={handleClose}
                    vno={vno}
                    vid={vid}
                    vImg={vImg}
                    vtype={vtype}
                    price={price}
                    vCategory={vCategory}
                    open={open.view}

                />
            }

            {
                open.edit &&
                <EditLogistics
                    onClose={handleClose}
                    toEditvno={vno}
                    toEditvid={vid}
                    toEditvtype={vtype}
                    toEditvImg={vImg}
                    toEditvCategory={vCategory}
                    toEditPrice={price}
                    open={open.edit}
                    id={id}

                />
            }

            {/* </div > */}
            {popup && <MakeSure handleDelete={handleDelete} handlePopup={handlePopup} />}
        </div >
    )
}

export default Logistics
