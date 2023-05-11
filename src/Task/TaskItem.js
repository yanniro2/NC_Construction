import Modal from "./Modal"
import './taskItem.css'

function TaskItem({ onClose, open, title, description })
{

  return (
    <div className='w-full h-full py-[6rem] px-5'>
      <Modal modalLable='Task Item' onClose={onClose} open={open}>
        <div className='taskItem'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </Modal>
    </div>
  )
}

export default TaskItem
