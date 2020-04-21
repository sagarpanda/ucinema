async function httpRequest(url) {
  const data = await fetch(url).then(response => {
    if(response.status === 200) {
      const responseData = response.json();
      return { data: responseData, status: true };
    } else {
      return { status: false };
    }
  });
  return data;
}

export default httpRequest;