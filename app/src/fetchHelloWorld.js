export const fetchHelloWorld = async () => {
  const apiUrl = process.env.REACT_APP_API_URL
  const res = await fetch(apiUrl)
  const json = await res.json();
  console.log(json);
  return json;
}

