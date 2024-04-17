
async function getData(url) {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json"
      },
    };
  
    const response = fetch(
      url,
      options
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));
  
    return response;
  }
  
  export default async function APICall(url) {
    const data = await getData(url);
    return data;
  }