import axios from "axios";

export const validateUser = async () => {
  const response = await axios.get("http://localhost:3001/utenti/login", {
    headers: {
      "my-access-token": localStorage.getItem("token"),
    },
  });
  //console.log(response.data);
  return response.data;
};
