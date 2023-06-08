import Modal from "./Modal"
import { useState } from 'react'
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../firebase'

function AddLogistics({ open, onClose, id, toEditvno, toEditvid, toEditvtype, toEditvImg, toEditPrice })
{

  const [vno, setVno] = useState(toEditvno)
  const [vid, setVid] = useState(toEditvid)
  const [vtype, setVype] = useState(toEditvtype)
  const [vImg, setVImg] = useState(toEditvImg)
  const [price, setPrice] = useState(toEditPrice)



  /* function to update document in firestore */
  const handleUpdate = async (e) =>
  {
    e.preventDefault()
    const taskDocRef = doc(db, 'Logistics', id)
    try {
      await updateDoc(taskDocRef, {
        vno: vno,
        vid: vid,
        vImg: vImg,
        price: price,
        vtype: vtype,
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }
  return (
    <div className='w-full h-full pt-[7rem] px-5 fixed z-[1000] top-0 left-0 right-0 bottom-0  backdrop-blur-md flex items-center justify-center pb-2'>
      <Modal modalLable='Edit Logistics' onClose={onClose} open={open}>
        <form className='form  flex items-center w-full' name='updateCustomer' onSubmit={handleUpdate}>
          <div className='flex items-center justify-center flex-col gap-1 w-full'>
            <div className='w-full flex flex-col gap-2'>
              <label htmlFor="Type" className=' font-lg'>
                Type
              </label>
              <input
                type='text'
                name='vno'
                onChange={(e) => setVno(e.target.value)}
                value={vno}
                placeholder='Enter Type'
                className='input w-full' />
            </div>



            <div className='w-full flex flex-col gap-2'>
              <label htmlFor="Type" className=' font-lg'>
                Material
              </label>
              <input
                type="text"
                name="vid"
                onChange={(e) => setVid(e.target.value)}
                placeholder='Enter Building Materials'
                value={vid}
                className='input ' />
            </div>


            <div className='w-full flex flex-col gap-2'>
              <label htmlFor="Type" className=' font-lg'>
                Supplier
              </label>
              <input
                type="text"
                name="vtype"
                onChange={(e) => setVype(e.target.value)}
                placeholder='Enter Construction Supplies'
                value={vtype}
                className='input ' />
            </div>


            <div className='w-full flex flex-col gap-2'>
              <label htmlFor="Type" className=' font-lg'>
                Img
              </label>
              <input
                type="text"
                name="vImg"
                onChange={(e) => setVImg(e.target.value)}
                placeholder='Enter Img of Sample'
                value={vImg}
                className='input ' />
            </div>

            <div className='w-full flex flex-col gap-2'>
              <label htmlFor="Type" className=' font-lg'>
                Price
              </label>
              <input
                type="text"
                name="price"
                onChange={(e) => setPrice(e.target.value)}
                placeholder='Enter  Price'
                value={price}
                className='input ' />
            </div>
          </div>


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
