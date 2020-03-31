import { useState, useCallback } from 'react';
import { useHistory } from "react-router-dom";

const useSearch = (records) => {
  const initData = { loading: false, value: '', results: [] };

  const [ data, setData ] = useState(initData);
  const history = useHistory();

  const handleSearchChange = useCallback((e, { value }) => {
    setData({ loading: true, value, results: [] });
    const results = records.filter(item => item.title.toLowerCase().indexOf(value) > -1);
    setData({ loading: false, value, results });
  }, [records]);

  const handleResultSelect = useCallback((e, { result }) => {
    setData({ loading: false, value: '', results: [] });
    history.push(`/watch/${result.id}`);
  }, [history]);

  return {
    data,
    handleSearchChange,
    handleResultSelect
  }
};

export default useSearch;