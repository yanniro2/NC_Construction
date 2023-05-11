import Modal from "./Modal"
import { useState } from 'react'
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../firebase'

function EditCustomer({ open, onClose, toEditTitle, toEditDescription, id, toEditcusID, toEditcusNo, toEditcusEmail })
{

  const [title, setTitle] = useState(toEditTitle)
  const [description, setDescription] = useState(toEditDescription)
  const [cusEmail, setCusEmail] = useState(toEditcusEmail);
  const [cusNo, setCusNo] = useState(toEditcusNo);
  const [cusID, setCusID] = useState(toEditcusID);

  /* function to update document in firestore */
  const handleUpdate = async (e) =>
  {
    e.preventDefault()
    const taskDocRef = doc(db, 'customer', id)
    try {
      await updateDoc(taskDocRef, {
        title: title,
        description: description,
        cusEmail: cusEmail,
        cusNo: cusNo,
        cusID: cusID,
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }
  return (
    <div className='w-full h-ful pt-[10rem] px-5 fixed z-[1000] top-0 left-0 right-0 bottom-0  backdrop-blur-md py-5 flex justify-center '>
      <Modal modalLable='Customer' onClose={onClose} open={open}>
        <form className='form' name='updateCustomer' onSubmit={handleUpdate}>
          <input
            className='input'
            type='text'
            name='title'
            onChange={(e) => setTitle(e.target.value)}
            value={title} />

          <input
            className='input'
            type='email'
            name='cusEmail'
            onChange={(e) => setCusEmail(e.target.value)}
            value={cusEmail} />

          <input
            className='input'
            type='number'
            name='cusNo'
            onChange={(e) => setCusNo(e.target.value)}
            value={cusNo} />

          <input
            className='input'
            type='text'
            name='cusID'
            onChange={(e) => setCusID(e.target.value)}
            value={cusID} />

          <input
            className='input'
            type='text'
            name='description'
            onChange={(e) => setDescription(e.target.value)}
            value={description} />


          <div className='flex items-center justify-center gap-6'>
            <button className='btn' type="reset" onClick={onClose}>Cancel</button>
            <button type='submit' className='btn'>Done</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default EditCustomer
