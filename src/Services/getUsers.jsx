import React from "react";
import axios from "axios";

function getUsers() {
  const [value, setValue] = React.useState("");
  const [dataGitHub, setDataGitHub] = React.useState([]);
  const [effect, setEffect] = React.useState(false);
  const [errors, setErrors] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    async function fetchData() {
      setLoading(true);

      try {
        const response = await axios.get(
          `https://api.github.com/users/${value}`
        );
        setDataGitHub(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        setErrors(error)
        console.log(errors);
        if (error.response.data.message === "Not Found") {
          setValue("octocat");
          setEffect(!effect);
        }
      }
    }
    console.log(dataGitHub);
    fetchData();
  }, [effect]);
  console.log(value);
  return {
    setLoading,
    setValue,
    dataGitHub,
    value,
    setEffect,
    effect,
  };
}

export { getUsers };
