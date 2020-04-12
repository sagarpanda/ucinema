import React, { useState, useEffect } from 'react';
import fetchGoogleSheet from '../utils/fetchGoogleSheet';
import parseGoogleSheet from '../utils/parseGoogleSheet';

const DataContext = React.createContext({});

const DataProvider = (props) => {
    const [ rowData, setRowData ] = useState({ isLoading: true, data: [], subData: {} });
    useEffect(() => {
        fetchGoogleSheet({
            spreadsheetId: '1xqxT4Q0Zh4n9W5GYew-ltxfb4oG42icVlHQEX_RErQE',
            sheetNum: 1
        })
        .then(parseGoogleSheet)
        .then(dd => {
            const subData = {};
            const data = dd.filter(d => {
                if(d.parentId) {
                    const temp = subData[d.parentId] || [];
                    subData[d.parentId] = [...temp, d];
                }
                return !d.hidden && !d.parentId;
            });
            
            setRowData({ isLoading: false, data, subData });
            return data;
        });
    }, [])
    return (
        <DataContext.Provider value={rowData}>
          {props.children}
        </DataContext.Provider>
    );
};

export { DataContext };

export default DataProvider;