import { db } from '../firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import Modal from "./Modal"
import { useState } from 'react'



function AddStocks({ onClose, open })
{
  const [item, setItem] = useState('')
  const [icode, setIcode] = useState('')


  /* function to add new task to firestore */
  const handleSubmit = async (e) =>
  {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'stocks'), {
        item: item,
        icode: icode,
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
      <Modal modalLable='Add Stock' onClose={onClose} open={open}>
        <form name='addTask' onSubmit={handleSubmit} className="form ">
          <input
            type='text'
            name='item'
            onChange={(e) => setItem(e.target.value)}
            value={item}
            placeholder='Enter Items'
            className='input' />

          <input
            type="text"
            name="icode"
            onChange={(e) => setIcode(e.target.value)}
            placeholder='Enter Item Code'
            value={icode}
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
