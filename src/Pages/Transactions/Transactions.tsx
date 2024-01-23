import TransactionTable from '../../Components/TransactionTable/TransactionTable'
import './Transactions.scss'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Transactions = () => {
  return (
    <div className='transaction'>
      <div className="transaction-wrapper">
        <h2>Transaction</h2>
        <div className="table">
        <TransactionTable />

        </div>
       
        <Stack className='stack' spacing={4}>
      
      <Pagination count={3} variant="outlined" color="primary" />
     
      
    </Stack>
      
     

      </div>
    </div>
  )
}

export default Transactions