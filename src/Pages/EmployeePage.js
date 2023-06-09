// JavaScript

import Task from '../Employee/Employee'
import AddTask from '../Employee/AddEmployee'
import { useState, useEffect } from 'react'
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { db } from '../firebase'
import { PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer';

function EmployeePage()
{
    const [openAddModal, setOpenAddModal] = useState(false)
    const [tasks, setTasks] = useState([])

    /* function to get all tasks from firestore in realtime */
    useEffect(() =>
    {
        const q = query(collection(db, 'employee'), orderBy('created', 'desc'))
        onSnapshot(q, (querySnapshot) =>
        {
            setTasks(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])

    // Functionto Generate a Report
    const generateReport = () =>
    {
        const ReportDocument = () => (
            <Document>
                <Page>
                    <Text>Employees Report</Text>
                    {tasks.map((product) => (
                        <Text key={product.id}>
                            {product.data.ename} - {product.data.emobile}
                        </Text>
                    ))}
                </Page>
            </Document>
        );

        return <ReportDocument />;
    };

    return (
        <div className='w-full h-full py-[6rem] px-5 flex flex-col'>
            <div className='text-center text-[1.5rem] font-xl font-open uppercase p-5 text-dark-blue flex justify-between w-full'>
                <header className='text-[2rem] font-xl'>Employee</header>
                <button className='btn bg-dark-blue text-white'
                    onClick={() => setOpenAddModal(true)}>
                    Add Employee +
                </button>
            </div>

            <div className='taskManager__container p-5'>

                <div className='flex w-full h-full flex-wrap gap-5'>
                    {tasks.map((task) => (
                        <Task
                            id={task.id}
                            key={task.id}
                            completed={task.data.completed}
                            ename={task.data.ename}
                            email={task.data.email}
                            eaddress={task.data.eaddress}
                            eid={task.data.eid}
                            emobile={task.data.emobile}

                        />
                    ))}
                </div>
            </div>
            {openAddModal &&
                <AddTask onClose={() => setOpenAddModal(false)} open={openAddModal} />
            }
            <PDFDownloadLink
                document={generateReport()}
                fileName="EmployeeReport.pdf"
                className="btn bg-dark-blue hover:bg-blue-700 text-white font-bold"
            >
                {({ loading }) =>
                    loading ? 'Generating report...' : 'Download Report'
                }
            </PDFDownloadLink>
        </div>
    )
}

export default EmployeePage;
