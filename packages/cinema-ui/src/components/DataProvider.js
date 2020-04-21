import React, { useEffect, useReducer } from 'react';
import config from '../config';
import fetchGoogleSheet from '../utils/fetchGoogleSheet';
import parseGoogleSheet from '../utils/parseGoogleSheet';
import httpRequest from '../utils/httpRequest';

const DataContext = React.createContext({});

const initialState = {
    isLoading: true,
    data: [],
    subData: {},
    intranet: false,
    cloudData: [],
    cloudSubData: {}
};

function reducer(state, action) {
  switch (action.type) {
    case 'fetchGoogleSuccess':
        return {
          ...state,
          isLoading: false, 
          data: action.payload.data, 
          subData: action.payload.subData
        };
    case 'intraSuccess':
        return { ...state, intranet: true };
    case 'fetchCloudSuccess':
        return { ...state, cloudData: action.payload };
    case 'update':
        return { ...state, ...action.payload };
    default:
        throw new Error();
  }
}

const DataProvider = (props) => {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    useEffect(() => {
        fetchGoogleSheet({
            spreadsheetId: config.googleSheetId,
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
            dispatch({ type: 'fetchGoogleSuccess', payload: { data, subData } });
            return data;
        })
        .then(dd => {
            const intraData = httpRequest(`${config.intraBaseUrl}${config.checkerUrl}`);
            return intraData;
        })
        .then(dd => {
            if (dd.status) {
                dispatch({ type: 'intraSuccess' });

                fetch(`${config.intraBaseUrl}${config.movieUrl}`).then(response => {
                    if(response.status === 200) {
                        return response.json();
                    }
                }).then(responseData => {
                    dispatch({ type: 'fetchCloudSuccess', payload: responseData });
                });
                return true;
            } else {
                return false;
            }
        });
    }, []);
    const values = { ...state, dispatch };
    return (
        <DataContext.Provider value={values}>
          {props.children}
        </DataContext.Provider>
    );
};

export { DataContext };

export default DataProvider;