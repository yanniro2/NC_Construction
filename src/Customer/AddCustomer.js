import { db } from '../firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import Modal from "./Modal"
import { useState } from 'react'



function AddCustomer({ onClose, open })
{
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [cusEmail, setCusEmail] = useState('');
  const [cusNo, setCusNo] = useState('');
  const [cusID, setCusID] = useState('');


  /* function to add new task to firestore */
  const handleSubmit = async (e) =>
  {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'customer'), {
        title: title,
        description: description,
        cusEmail: cusEmail,
        cusNo: cusNo,
        cusID: cusID,
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
      <Modal modalLable='Add Customer' onClose={onClose} open={open}>
        <form name='addTask' onSubmit={handleSubmit} className="form ">
          <input
            type='text'
            name='title'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder='Enter Title'
            className='input' />
          <input
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Enter Customer decription'
            value={description}
            className='input' />

          <input
            type="number"
            name="cusNo"
            onChange={(e) => setCusNo(e.target.value)}
            placeholder='Enter Customer NO'
            value={cusNo}
            className='input' />

          <input
            type="text"
            name="cusID"
            onChange={(e) => setCusID(e.target.value)}
            placeholder='Enter Customer ID'
            value={cusID}
            className='input' />


          <input
            type="email"
            name="cusEmail"
            onChange={(e) => setCusEmail(e.target.value)}
            placeholder='Enter Customer Email'
            value={cusEmail}
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

export default AddCustomer
