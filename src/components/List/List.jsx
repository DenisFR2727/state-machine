import {useEffect, useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useHttp } from '../api/http.hook';
import Sceleton from '../Sceleton/Sceleton';
import SkeletonTypography from '../Error/Error';
function List() {
    const [rows, setRows] = useState([]);
    const { request, process } = useHttp();

useEffect(() => {
    const fetchUsers = async () => {
         const users = await request('https://jsonplaceholder.typicode.com/users');
         setRows(users);
    }
    fetchUsers();
    
},[request])

    const columns = [
        { field: 'id', name: 'ID', width: 70 },
        { field: 'name', headerName: 'Full name', width: 130 },
        { field: 'email', headerName: 'email', width: 200 },
        {
          field: 'phone',
          headerName: 'Phone',
          type: 'number',
          width: 180,
        },
        {
          field: 'website',
          headerName: 'Website',
          width: 160,
        },
      ];
 const setContent = (process) => {
       switch(process){
        case 'waiting': 
           return <Sceleton />
        case 'loading':
           return <Sceleton />
        case 'confirmed':
           return <Component rows={rows} columns={columns}/>
        case 'error':
           return <SkeletonTypography /> 
           
        default: <Component rows={rows} columns={columns}/>
       }
 }
  return (
     <>
        {setContent(process)}
     </>
  )
}

const Component = (props) => {
    const {rows, columns } = props
        return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                paginationModel: { page: 0, pageSize: 5 },
                },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            />
       </div>
    )
}
export default List