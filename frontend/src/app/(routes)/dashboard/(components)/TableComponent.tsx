import React, { useState } from 'react'
import { UseDemoDataOptions, useDemoData } from '@mui/x-data-grid-generator';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

function TableComponent() {

    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 100,
        editable: true,
    });
  return (
    <>
    <Box sx={{ height: 520, width: '100%' }}>
      <DataGrid
        {...data}
        loading={data.rows.length === 0}
        rowHeight={38}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </>
  )
}

export default TableComponent