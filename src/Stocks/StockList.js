import Modal from "./Modal"

function StockList({ onClose, open, ename, eaddress, email, eid, emobile })
{

  return (
    <div className='w-full h-ful pt-[10rem] px-5 fixed z-[1000] top-0 left-0 right-0 bottom-0  backdrop-blur-md py-5 flex justify-center '>
      <Modal modalLable='Customer List' onClose={onClose} open={open}>
        <div className='w-full h-full flex flex-col justify-around'>
          <div className="flex items-center gap-6">
            <label htmlFor="" className="text-[1.2rem] font-xl capitalize">
              Name:
            </label>
            <h2>{ename}</h2>
          </div>

          <div className="flex items-center gap-6">
            <label htmlFor="" className="text-[1.2rem] font-xl capitalize">
              Address:
            </label>
            <h2>{eaddress}</h2>
          </div>

          <div className="flex items-center gap-6">
            <label htmlFor="" className="text-[1.2rem] font-xl capitalize">
              Employee id
            </label>
            <h2>{eid}</h2>
          </div>

          <div className="flex items-center gap-6">
            <label htmlFor="" className="text-[1.2rem] font-xl capitalize">
              Employee Mobile
            </label>
            <h2>{emobile}</h2>
          </div>

          <div className="flex items-center gap-6">
            <label htmlFor="" className="text-[1.2rem] font-xl capitalize">
              Employee Email
            </label>
            <h2>{email}</h2>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default StockList
