import Modal from "./Modal"

function LogisticsList({ onClose, open, vno, vid, vtype, vImg, price })
{

  return (
    <div className='w-full h-ful pt-[10rem] px-5 fixed z-[1000] top-0 left-0 right-0 bottom-0  backdrop-blur-md py-5 flex justify-center '>
      <Modal modalLable='Logistics List' onClose={onClose} open={open}>
        <div className='w-full h-full flex flex-col justify-around'>
          <div className="flex items-center gap-6">
            <label htmlFor="" className="text-[1.2rem] font-xl capitalize">
              Vechile No:
            </label>
            <h2>{vno}</h2>
          </div>

          <div className="flex items-center gap-6">
            <label htmlFor="" className="text-[1.2rem] font-xl capitalize">
              Vachile ID:
            </label>
            <h2>{vid}</h2>
          </div>

          <div className="flex items-center gap-6">
            <label htmlFor="" className="text-[1.2rem] font-xl capitalize">
              Vachile Type:
            </label>
            <h2>{vtype}</h2>
          </div>

          <div className="flex items-center gap-6">
            <label htmlFor="" className="text-[1.2rem] font-xl capitalize">
              Price:
            </label>
            <h2>{price}$</h2>
          </div>
          <div className="w-full rounded-md overflow-hidden ">
            <img src={vImg} alt="img" className="w-full object-cover " />
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default LogisticsList
