import { BaseURL } from "./URLS";

async function getData() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };
  
    const response = fetch(
      `${BaseURL}type`,
      options
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));
  
    return response;
  }
  
  export default async function getCategories() {
    const data = await getData();
    return data;
  }