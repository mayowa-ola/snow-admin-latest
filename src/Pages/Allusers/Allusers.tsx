import './Allusers.scss'

const Allusers = () => {
  return (
    <div className="allusers">
      <h1 className='heading'>All Users</h1>
      <div className='allusers-wrwpper'>
      
      <div className='allusersBox'>
        <h1>All Users</h1>
        <div className="allUsersInner">
          <input type="text" placeholder='Search' className='allUsersInput' />
          <button >Bulk Delete </button>
        </div>
      </div>
    </div>

    </div>
    
  )
}

export default Allusers