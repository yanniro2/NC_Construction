import { useState } from 'react'
import CustomerList from '../Customer/CustomerList'
import EditCustomer from '../Customer/EditCustomer'
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase'
// import "./task.css"
function Customer({ id, title, description, completed })
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
        const taskDocRef = doc(db, 'customer', id)
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
        const taskDocRef = doc(db, 'customer', id)
        try {
            await deleteDoc(taskDocRef)
        } catch (err) {
            alert(err)
        }
    }

    return (
        <div className=''>
            <div className={`task ${checked && 'task--borderColor'}`}>
                <div>
                    <input
                        id={`checkbox-${id}`}
                        className='checkbox-custom'
                        name="checkbox"
                        checked={checked}
                        onChange={handleCheckedChange}
                        type="checkbox" />
                    <label
                        htmlFor={`checkbox-${id}`}
                        className="checkbox-custom-label"
                        onClick={() => setChecked(!checked)} ></label>
                </div>
                <div className='task__body'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className='task__buttons'>
                        <div className='task__deleteNedit'>
                            <button
                                className='task__editButton'
                                onClick={() => setOpen({ ...open, edit: true })}>
                                Edit
                            </button>
                            <button className='task__deleteButton' onClick={handleDelete}>Delete</button>
                        </div>
                        <button
                            onClick={() => setOpen({ ...open, view: true })}>
                            View
                        </button>
                    </div>
                </div>

                {open.view &&
                    <CustomerList
                        onClose={handleClose}
                        title={title}
                        description={description}
                        open={open.view} />
                }

                {open.edit &&
                    <EditCustomer
                        onClose={handleClose}
                        toEditTitle={title}
                        toEditDescription={description}
                        open={open.edit}
                        id={id} />
                }

            </div>
        </div>
    )
}

export default Customer
