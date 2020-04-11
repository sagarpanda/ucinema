import React, { useState, useEffect } from 'react';
import fetchGoogleSheet from '../utils/fetchGoogleSheet';

const DataContext = React.createContext({});

const DataProvider = (props) => {
    const [ rowData, setRowData ] = useState({ isLoading: true, data: [] });
    useEffect(() => {
        fetchGoogleSheet({
            spreadsheetId: '1xqxT4Q0Zh4n9W5GYew-ltxfb4oG42icVlHQEX_RErQE',
            sheetNum: 1
        }).then(dd => {
            const data = dd.reduce((prev, d) => {
                const hidden = d.col10 ? true : false;
                if(!hidden) {
                    prev.push({
                        id: d.col0,
                        title: d.col1,
                        desc: d.col2,
                        url: d.col3,
                        imgUrl: d.col4,
                        widerImgUrl: d.col5,
                        category: d.col6,
                        type: d.col7,
                        createdDate: d.col8,
                        imdbID: d.col9
                    });
                }
                return prev;
            }, []);
            setRowData({ isLoading: false, data });
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