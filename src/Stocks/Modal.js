
function Modal({ open, modalLable, children, custom_modal, onClose })
{

  const handleClose = (e) =>
  {
    if (e.target.className === 'modalContainer') {
      onClose()
    }
    return null
  }

  if (open) {
    return (
      <div className='flex justify-center items-center w-1/2 h-full p-5  rounded-md drop-shadow-md bg-white'>
        <div className='w-full h-full flex justify-center' onClick={handleClose}>
          <div className="flex flex-col w-full h-full justify-center ">
            <div className='flex items-center justify-between py-5'>
              <h2 className='text-[1.5rem]  font-lg uppercase'>{modalLable}</h2>
              <span className=' cursor-pointer text-[2rem]' onClick={onClose}>x</span>
            </div>
            {children}
          </div>
        </div>
      </div>
    )
  }
  return null
}

export default Modal
