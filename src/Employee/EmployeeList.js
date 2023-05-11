import Modal from "./Modal"
// import './taskItem.css'

function CustomerList({ onClose, open, title, description })
{

  return (
    <div className='w-full h-full py-[6rem] px-5'>
      <Modal modalLable='Customer List' onClose={onClose} open={open}>
        <div className='taskItem'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </Modal>
    </div>
  )
}

export default CustomerList
