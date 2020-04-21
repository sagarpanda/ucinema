const hiddenTags = ['hidden', 'y'];

const parseGoogleSheet = responseData => {
  const [ first = {}, ...rest ] = responseData;
  const keys = Object.keys(first);

  const data = rest.reduce((prev, d) => {
      const ob = keys.reduce((prevOb, currKey) => {
          const key = first[currKey] || currKey;
          const value = d[currKey];
          if(key === 'hidden') {
              prevOb[key] = hiddenTags.indexOf(value) > -1 ? true : false;
          } else {
              prevOb[key] = value;
          }
          return prevOb;
      }, {});
      prev.push(ob);
      return prev;
  }, []);

  return data;
};

export default parseGoogleSheet;