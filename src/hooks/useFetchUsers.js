import { useEffect, useState } from "react";

const useFetchUsers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    //TODO: remove local url and replace with external url
    fetch(`https://3000-youngnambiti-ynabackend-4n2o9w32tjk.ws-eu104.gitpod.io/api/v1/users`)
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
