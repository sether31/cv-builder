import deleteIcon from '../../assets/delete.png'

function Nav({clearData, loadDummyData}) {
  return (
    <nav className="p-4 rounded-xl shadow-2xl grid grid-cols-2 gap-2">
      <button 
        onClick={clearData}
        type="button" 
        className="text-red-500 rounded-lg p-2 justify-center font-bold text-sm flex gap-1 items-center cursor-pointer"
      >
        <img className='w-4 h-4' src={deleteIcon} alt="delete cv" />
        Clear Resume
      </button>
      <button 
        onClick={loadDummyData}
        type="button" 
        className="bg-slate-200 rounded-lg p-2 font-bold text-sm text-center cursor-pointer"
      >
        Load Example
      </button>
    </nav>
  )
}

export default Nav;