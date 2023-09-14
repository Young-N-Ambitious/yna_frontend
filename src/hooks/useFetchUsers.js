import { useEffect, useState } from "react";

const useFetchUsers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    //TODO: remove local url and replace with external url
    fetch(`http://127.0.0.1:3000/api/v1/users`)
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
