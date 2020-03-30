async function fetchGoogleSheet({spreadsheetId, sheetNum}) {
  const tab = sheetNum || 1;
  const fetchUrl = `https://spreadsheets.google.com/feeds/cells/${spreadsheetId}/${tab}/public/full?alt=json`;
  const data = await fetch(fetchUrl).then(response => {
    if(response.status === 200) {
      return response.json();
    } else {
      return { feed: { entry: [] }};
    }
  });
  // let count = 0;
  const rowData = data.feed.entry.reduce((prev, curr) => {
     const { row, col } = curr['gs$cell'];
     const content = curr.content['$t'];
     const rowIndex = row - 1;
     const colIndex = col - 1;
     if(prev[rowIndex]) {
       prev[rowIndex][`col${colIndex}`] = content;
     } else {
       prev[rowIndex] = { [`col${colIndex}`]: content };
     }
     return prev;
  }, []);
  return rowData;
}

export default fetchGoogleSheet;