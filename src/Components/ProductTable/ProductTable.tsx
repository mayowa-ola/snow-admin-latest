
import './ProductTable.scss'
import { DataGrid, GridColDef, GridToolbar,  } from '@mui/x-data-grid';

const ProductTable = () => {

    
const columns: GridColDef[] = [
    { field: 'id', headerName: 'Select', width: 90 },
    {field:"artwork", headerName: "Artwork", width: 100},
    {field:"artist", headerName: "Artist", width: 100},
    {
        field:'avatar', headerName:'Product Picture', width:100,
        renderCell: (params)=>{
            return <img src={params.row.img || "/noavatar.png"} alt="" />
        }
    },
    {
        field:'profilepics', headerName:'Artist Picture', width:100,
        renderCell: (params)=>{
            return <img src={params.row.img || "/noavatar.png"} alt="" />
        }
    },
    {
      field: 'phone number',
      headerName: 'Phone Number',
      width: 150,
      editable: true,
    },
    
    {
      field: 'address',
      headerName: 'address',
      width: 150,
      editable: true,
    },
    {field:"category", headerName: "Category", width: 100},
    {
      field: 'status',
      headerName: 'Status',
      type: 'boolean',
      width: 110,
      editable: true,
    },
   
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', status: true },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', status: false },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', status: false },
    { id: 4, lastName: 'Stark', firstName: 'Arya', status: true },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', status: null },
    { id: 6, lastName: 'Melisandre', firstName: null, status: true },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', status: false },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', status: true },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', status: false },
  ];
  

  return (
    <div className='producttable'>
         <DataGrid
         className='productgrid'
         rows={rows}
         columns={columns}
         initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
            toolbar:{
                showQuickFilter:true,
                quickFilterProps: {debounceMs: 500},
            }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnSelector
        disableDensitySelector
      />
    </div>
  )
}

export default ProductTable