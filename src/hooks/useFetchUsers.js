import { useEffect, useState } from "react";

const useFetchUsers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    //TODO: remove local url and replace with external url
    fetch(process.env.REACT_APP_API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return data;
};

export default useFetchUsers;
