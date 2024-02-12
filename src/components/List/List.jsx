import {useEffect, useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useHttp } from '../api/http.hook';

import { setContent } from '../utils/setContent';

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

  return (
     <>
        {setContent(process, Component, {rows, columns})}
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