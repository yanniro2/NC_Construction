import { useState } from 'react'
import EmployeeList from '../Employee/EmployeeList'
import EditEmployee from '../Employee/EditEmployee'
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase'
import { RiUser3Fill } from "react-icons/ri"
function Stocks({ id, ename, email, completed, eaddress, eid, emobile })
{

    const [checked, setChecked] = useState(completed)
    const [open, setOpen] = useState({ edit: false, view: false })

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
        const taskDocRef = doc(db, 'employee', id)
        try {
            await deleteDoc(taskDocRef)
        } catch (err) {
            alert(err)
        }
    }

    return (
        <div className=' rounded  shadow-md border-light-blue border-[2px] flex w-[15rem] h-[15rem] '>
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
                <div className='w-full h-full flex flex-col justify-evenly items-center'>
                    <div>
                        <RiUser3Fill className='text-[4rem] text-dark-blue' />
                    </div>
                    <div>
                        <p className="text-[1.2rem] font-xl capitalize">

                            Name : {ename}</p>
                        <p className="text-[1.2rem] font-xl capitalize">Id: {eid}</p>
                    </div>

                    <div className='flex w-full justify-evenly'>
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
                        <button className='btn-1 bg-yellow text-black' onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
            {
                open.view &&
                <EmployeeList
                    onClose={handleClose}
                    ename={ename}
                    email={email}
                    open={open.view}
                    eaddress={eaddress}
                    eid={eid}
                    emobile={emobile}
                />
            }

            {
                open.edit &&
                <EditEmployee
                    onClose={handleClose}
                    toEditname={ename}
                    toEditemail={email}
                    toEditaddress={eaddress}
                    toEditeEid={eid}
                    toEditemobile={emobile}
                    open={open.edit}
                    id={id}

                />
            }

            {/* </div > */}
        </div >
    )
}

export default Stocks
