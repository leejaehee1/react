import React from 'react';
import { useAuthenticated } from 'react-admin';
import GridComponent from './managementcomponent/GridComponent';

const ManagementTamplate = () => {
    useAuthenticated(); // redirects to login if not authenticated
    return (
        <div 
            style={{ 
                        // maxWidth: '100%',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center', 
                    }}>
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