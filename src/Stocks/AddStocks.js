import { db } from '../firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import Modal from "./Modal"
import { useState } from 'react'



function AddStocks({ onClose, open })
{
  const [ename, setEname] = useState('')
  const [email, setEmail] = useState('')
  const [eaddress, setAddress] = useState('');
  const [eid, setId] = useState('');
  const [emobile, setMoile] = useState('');


  /* function to add new task to firestore */
  const handleSubmit = async (e) =>
  {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'employee'), {
        ename: ename,
        email: email,
        eaddress: eaddress,
        eid: eid,
        emobile: emobile,
        completed: false,
        created: Timestamp.now()
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }
  return (
    <div className='w-full h-full pt-[10rem] px-5 fixed z-[1000] top-0 left-0 right-0 bottom-0  backdrop-blur-md py-5 flex items-center justify-center '>
      <Modal modalLable='Add Employee' onClose={onClose} open={open}>
        <form name='addTask' onSubmit={handleSubmit} className="form ">
          <input
            type='text'
            name='ename'
            onChange={(e) => setEname(e.target.value)}
            value={ename}
            placeholder='Enter Name'
            className='input' />
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter Email'
            value={email}
            className='input' />

          <input
            type="text"
            name="eaddress"
            onChange={(e) => setAddress(e.target.value)}
            placeholder='Enter Address'
            value={eaddress}
            className='input' />

          <input
            type="text"
            name="eid"
            onChange={(e) => setId(e.target.value)}
            placeholder='Enter Employee ID'
            value={eid}
            className='input' />


          <input
            type="text"
            name="emobile"
            onChange={(e) => setMoile(e.target.value)}
            placeholder='Enter Mobile no'
            value={emobile}
            className='input' />

          <div className='flex items-center justify-center gap-6'>
            <button className='btn' onClick={onClose} type="reset">Cancel</button>
            <button type='submit' className='btn'>Done</button>
          </div>

        </form>
      </Modal>
    </div >
  )
}

export default AddStocks
