import Modal from "./Modal"
import { useState } from 'react'
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../firebase'

function EditStocks({ open, onClose, id, toEdititem, toEditicode })
{

  const [item, setItem] = useState(toEdititem)
  const [icode, setIcode] = useState(toEditicode)


  /* function to update document in firestore */
  const handleUpdate = async (e) =>
  {
    e.preventDefault()
    const taskDocRef = doc(db, 'stocks', id)
    try {
      await updateDoc(taskDocRef, {
        item: item,
        icode: icode,
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }
  return (
    <div className='w-full h-ful pt-[10rem] px-5 fixed z-[1000] top-0 left-0 right-0 bottom-0  backdrop-blur-md py-5 flex justify-center '>
      <Modal modalLable='Stock' onClose={onClose} open={open}>
        <form className='form' name='updateCustomer' onSubmit={handleUpdate}>
          <input
            className='input'
            type='text'
            name='item'
            onChange={(e) => setItem(e.target.value)}
            value={item} />

          <input
            className='input'
            type='text'
            name='icode'
            onChange={(e) => setIcode(e.target.value)}
            value={icode} />

          <div className='flex items-center justify-center gap-6'>
            <button className='btn' type="reset" onClick={onClose}>Cancel</button>
            <button type='submit' className='btn'>Done</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default EditStocks
