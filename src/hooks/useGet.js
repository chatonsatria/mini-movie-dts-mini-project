import { useState } from "react";
import axios from "axios";

const useGet = (url) => {
  const [data, setData] = useState({
    status: "",
    feedback: "",
    baseUrl: "",
  });

  const reset = () => {
    setData({
      status: "",
      feedback: "",
      baseUrl: "",
    });
  };

  async function get() {
    const base_API_url = "https://api.themoviedb.org/3";
    const API_Key = "api_key=7319f64ce9b1975009dc5b276c7a021d";
    const base_Image_url = "https://image.tmdb.org/t/p/original";
    try {
      let res = await axios.get(`${base_API_url}/${url}?${API_Key}`, {});
      console.log(res);
      if (res.status === 200) {
        setData({
          status: true,
          feedback: res.data,
          baseUrl: base_Image_url,
        });
      }
    } catch (error) {
      console.log(error);
      console.log(error.response);
      setData({
        status: error.response.data.message,
        feedback: "",
        baseUrl: "",
      });
    }
  }

  return { data, get, reset };
};

export default useGet;
