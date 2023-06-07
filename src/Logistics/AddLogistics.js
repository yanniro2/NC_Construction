import { db } from '../firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import Modal from "./Modal"
import { useState } from 'react'



function AddLogistics({ onClose, open })
{
  const [vno, setVno] = useState('')
  const [vid, setVid] = useState('')
  const [vtype, setVype] = useState('')
  const [vImg, setVImg] = useState('')
  const [price, setPrice] = useState('')
  const [vCategory, setVCategory] = useState('')


  /* function to add new task to firestore */
  const handleSubmit = async (e) =>
  {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'Logistics'), {
        vno: vno,
        vid: vid,
        vtype: vtype,
        vImg: vImg,
        price: price,
        vCategory: vCategory,
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
      <Modal modalLable='Add Logistics' onClose={onClose} open={open}>
        <form name='addTask' onSubmit={handleSubmit} className="form ">
          <input
            type='text'
            name='vno'
            onChange={(e) => setVno(e.target.value)}
            value={vno}
            placeholder='Enter Vechile No'
            className='input' />

          <input
            type="text"
            name="vid"
            onChange={(e) => setVid(e.target.value)}
            placeholder='Enter Vechile Code'
            value={vid}
            className='input' />

          <input
            type="text"
            name="vtype"
            onChange={(e) => setVype(e.target.value)}
            placeholder='Enter Vechile Type'
            value={vtype}
            className='input' />

          <input
            type="text"
            name="vImg"
            onChange={(e) => setVImg(e.target.value)}
            placeholder='Enter Vechile Img'
            value={vImg}
            className='input' />

          <input
            type="text"
            name="vCategory"
            onChange={(e) => setVCategory(e.target.value)}
            placeholder='Enter Vechile Category'
            value={vCategory}
            className='input' />

          <input
            type="text"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            placeholder='Enter Vechile Price'
            value={price}
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

export default AddLogistics
