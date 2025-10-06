export default function ModalContent({ closeModal }) {
  return (
    <div onClick={closeModal}
         className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
            <div onClick={(e) => e.stopPropagation()} 
                 className='bg-slate-300 text-slate-800 p-10 rounded-md relative mb-[10vh]'>
                <h1>Modal Content</h1>
                <button onClick={closeModal} className='absolute top-0 right-0'>Fermer</button>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            </div>
    </div>
  )
}