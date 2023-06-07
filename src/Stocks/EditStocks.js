import Modal from "./Modal"
import { useState } from 'react'
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../firebase'

function EditStocks({ open, onClose, id, toEditprice, toEditimg, toEditiname })
{

  const [name, setName] = useState(toEditiname)
  const [price, setPrice] = useState(toEditprice)
  const [img, setImg] = useState(toEditimg)


  /* function to update document in firestore */
  const handleUpdate = async (e) =>
  {
    e.preventDefault()
    const taskDocRef = doc(db, 'stocks', id)
    try {
      await updateDoc(taskDocRef, {
        name: name,
        price: price,
        img: img,
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }
  return (
    <div className='w-full h-ful pt-[10rem] px-5 fixed z-[1000] top-0 left-0 right-0 bottom-0  backdrop-blur-md py-5 flex justify-center '>
      <Modal modalLable='Stock' onClose={onClose} open={open}>
        <form className='form w-full flex-col justify-evenly' name='updateCustomer' onSubmit={handleUpdate} >
          <div className="flex items-center justify-center gap-6">
            <label htmlFor="name" className=" font-open  font-lg">Name</label>
            <input
              className='input'
              type='text'
              name='name'
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter Name'
              value={name} />
          </div>



          <div className="flex items-center justify-center gap-6">
            <label htmlFor="name" className=" font-open  font-lg">price</label>
            <input
              className='input'
              type='text'
              name='price'
              onChange={(e) => setPrice(e.target.value)}
              placeholder='Enter Price'
              value={price} />
          </div>

          <div className="flex items-center justify-center gap-6">
            <label htmlFor="name" className=" font-open  font-lg">URL</label>
            <input
              className='input'
              type='text'
              name='img'
              onChange={(e) => setImg(e.target.value)}
              placeholder='Enter URL'
              value={img} />
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

export default EditStocks
