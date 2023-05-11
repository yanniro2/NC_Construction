import Modal from "./Modal"

function StockList({ onClose, open, item, icode })
{

  return (
    <div className='w-full h-ful pt-[10rem] px-5 fixed z-[1000] top-0 left-0 right-0 bottom-0  backdrop-blur-md py-5 flex justify-center '>
      <Modal modalLable='Stock List' onClose={onClose} open={open}>
        <div className='w-full h-full flex flex-col justify-around'>
          <div className="flex items-center gap-6">
            <label htmlFor="" className="text-[1.2rem] font-xl capitalize">
              Name:
            </label>
            <h2>{item}</h2>
          </div>

          <div className="flex items-center gap-6">
            <label htmlFor="" className="text-[1.2rem] font-xl capitalize">
              Address:
            </label>
            <h2>{icode}</h2>
          </div>


        </div>
      </Modal>
    </div>
  )
}

export default StockList
