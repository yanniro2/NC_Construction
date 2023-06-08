// JavaScript

import Task from '../Customer/Customer'
import AddTask from '../Customer/AddCustomer'
import { useState, useEffect } from 'react'
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { db } from '../firebase'

function CustomerPage()
{
    const [openAddModal, setOpenAddModal] = useState(false)
    const [tasks, setTasks] = useState([])

    /* function to get all tasks from firestore in realtime */
    useEffect(() =>
    {
        const q = query(collection(db, 'customer'), orderBy('created', 'desc'))
        onSnapshot(q, (querySnapshot) =>
        {
            setTasks(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])

    return (
        <div className='w-full h-full py-[6rem] px-5 '>
            <div className='text-center text-[1.5rem] font-xl font-open uppercase p-5 text-dark-blue flex justify-between w-full'>
                <header className='text-[2rem] font-xl'>Customer</header>
                <button className='btn bg-dark-blue text-white'
                    onClick={() => setOpenAddModal(true)}>
                    Add Customer +
                </button>
            </div>

            <div className='taskManager__container p-5'>

                <div className='flex w-full h-full flex-wrap gap-5'>
                    {tasks.map((task) => (
                        <Task
                            id={task.id}
                            key={task.id}
                            completed={task.data.completed}
                            title={task.data.title}
                            description={task.data.description}
                            cusEmail={task.data.cusEmail}
                            cusNo={task.data.cusNo}
                            cusID={task.data.cusID}

                        />
                    ))}
                </div>
            </div>
            {openAddModal &&
                <AddTask onClose={() => setOpenAddModal(false)} open={openAddModal} />
            }
        </div>
    )
}

export default CustomerPage;
