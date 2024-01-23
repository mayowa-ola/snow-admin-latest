import { useState } from 'react'
import ProductTable from '../../Components/ProductTable/ProductTable'
import './Products.scss'
import Change from '../../Components/Change/Change'






const Products = () => {

  const [open, setOpen] = useState(false)

  
  return (
    <div className='products'>
      <div className="info">
        <h1>Products</h1>
        <button className='change-btn' onClick={()=>setOpen(true)}>CHANGE</button>
      </div>
      <ProductTable />
      {open && <Change setOpen={setOpen}/>}
    </div>
  )
}

export default Products