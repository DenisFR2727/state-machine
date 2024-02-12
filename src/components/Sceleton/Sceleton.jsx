import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

function Sceleton() {
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
      
const rows = [
    { id: 1, name: '...', email: '...', phone:'...', website:'...'},
    { id: 2, name: '...', email: '...', phone:'...', website:'...'},
    { id: 3, name: '...', email: '...', phone:'...', website:'...'},
    { id: 4, name: '...', email: '...', phone:'...', website:'...'},
    { id: 5, name: '...', email: '...', phone:'...', website:'...'},
    { id: 6, name: '...', email: '...', phone:'...', website:'...'},
    { id: 7, name: '...', email: '...', phone:'...', website:'...'},
    { id: 8, name: '...', email: '...', phone:'...', website:'...'},
    { id: 9, name: '...', email: '...', phone:'...', website:'...'},
  ];
  
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

export default Sceleton