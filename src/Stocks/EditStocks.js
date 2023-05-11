import Modal from "./Modal"
import { useState } from 'react'
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../firebase'

function EditStocks({ open, onClose, toEditname, toEditemail, id, toEditaddress, toEditemobile, toEditeEid })
{

  const [ename, setEname] = useState(toEditname)
  const [email, setEmail] = useState(toEditemail)
  const [emobile, setMoile] = useState(toEditemobile);
  const [eaddress, setAddress] = useState(toEditaddress);
  const [eid, setId] = useState(toEditeEid);

  /* function to update document in firestore */
  const handleUpdate = async (e) =>
  {
    e.preventDefault()
    const taskDocRef = doc(db, 'stocks', id)
    try {
      await updateDoc(taskDocRef, {
        ename: ename,
        email: email,
        eid: eid,
        emobile: emobile,
        eaddress: eaddress,
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
            name='ename'
            onChange={(e) => setEname(e.target.value)}
            value={ename} />

          <input
            className='input'
            type='email'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email} />

          <input
            className='input'
            type='text'
            name='emobile'
            onChange={(e) => setMoile(e.target.value)}
            value={emobile} />

          <input
            className='input'
            type='text'
            name='eaddress'
            onChange={(e) => setAddress(e.target.value)}
            value={eaddress} />

          <input
            className='input'
            type='text'
            name='eid'
            onChange={(e) => setId(e.target.value)}
            value={eid} />


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
