import { GridColDef } from '@mui/x-data-grid';
import './Change.scss'

type Props = {
    slug: string;
    columns: GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const Change = (props:Props) => {
    const handleSubmit =(e: React.FormEvent<HTMLButtonElement>) =>{
        e.preventDefault();

        // axios.post(`/api/${}`)

    }
  return (
    <div className='change'>
        <div className="modal">
            <div className="changeTitle">
            <span className='close' onClick={()=>props.setOpen(false)}>X</span>
            <h2>Set Currency Price (NGN to USD)</h2>
            </div>
            <div className="changeBody">
            <input type="text" />
            <button onSubmit={handleSubmit}>Submit</button>

            </div>
           
            
        </div>
    </div>
  )
}

export default Change