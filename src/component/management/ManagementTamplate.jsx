import React from 'react';
import GridComponent from './managementcomponent/GridComponent';

const ManagementTamplate = () => {
    return (
        <div style={{ maxWidth: '100%' }}>
        <br />
        <br />
        <br />
    
            {/* <h1 align="center">Punch-list Import</h1> */}
            {/* <h4>Import Data from Excel, Csv in Material Table</h4> */}
            <GridComponent />
        </div>
    )
}

export default ManagementTamplate;