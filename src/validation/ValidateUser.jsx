import axios from "axios";

export const validateUser = async () => {
  console.log(localStorage.getItem("token"));
  const response = await axios.get("http://localhost:3001/utenti/login", {
    headers: {
      "my-access-token": localStorage.getItem("token"),
    },
  });
  console.log(response.data.loggedIn);
  return response.data.loggedIn;
};
