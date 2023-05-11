import Modal from "./Modal"
import { useState } from 'react'
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../firebase'

function AddLogistics({ open, onClose, id, toEditvno, toEditvid, toEditvtype })
{

  const [vno, setVno] = useState(toEditvno)
  const [vid, setVid] = useState(toEditvid)
  const [vtype, setType] = useState(toEditvtype)


  /* function to update document in firestore */
  const handleUpdate = async (e) =>
  {
    e.preventDefault()
    const taskDocRef = doc(db, 'Logistics', id)
    try {
      await updateDoc(taskDocRef, {
        vno: vno,
        vid: vid,
        vtype: vtype,
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }
  return (
    <div className='w-full h-ful pt-[10rem] px-5 fixed z-[1000] top-0 left-0 right-0 bottom-0  backdrop-blur-md py-5 flex justify-center '>
      <Modal modalLable='Edit Logistics' onClose={onClose} open={open}>
        <form className='form' name='updateCustomer' onSubmit={handleUpdate}>
          <input
            className='input'
            type='text'
            name='vno'
            onChange={(e) => setVno(e.target.value)}
            value={vno} />

          <input
            className='input'
            type='text'
            name='vid'
            onChange={(e) => setVid(e.target.value)}
            value={vid} />

          <input
            className='input'
            type='text'
            name='vtype'
            onChange={(e) => setType(e.target.value)}
            value={vtype} />

          <div className='flex items-center justify-center gap-6'>
            <button className='btn' type="reset" onClick={onClose}>Cancel</button>
            <button type='submit' className='btn'>Done</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default AddLogistics
