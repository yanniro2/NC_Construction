// JavaScript

import Task from '../Logistics/Logistics'
import AddTask from '../Logistics/AddLogistics'
import { useState, useEffect } from 'react'
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { db } from '../firebase'

function LogisticsPage()
{
    const [openAddModal, setOpenAddModal] = useState(false)
    const [tasks, setTasks] = useState([])

    /* function to get all tasks from firestore in realtime */
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

    return (
        <div className='w-full h-full py-[6rem] px-5'>
            <div className='text-center text-[1.5rem] font-xl font-open uppercase p-5 text-dark-blue flex justify-between w-full'>
                <header className='text-[2rem] font-xl'>Logistics</header>
                <button className='btn bg-dark-blue text-white'
                    onClick={() => setOpenAddModal(true)}>
                    Add Logistics +
                </button>
            </div>

            <div className='taskManager__container p-5'>

                <div className='flex w-full h-full flex-wrap gap-5'>
                    {tasks.map((task) => (
                        <Task
                            id={task.id}
                            key={task.id}
                            completed={task.data.completed}
                            vno={task.data.vno}
                            vid={task.data.vid}
                            vtype={task.data.vtype}
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

export default LogisticsPage;
