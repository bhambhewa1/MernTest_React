import axios from "axios";

export const getRequest = async (url, data) => {
    try {
        const res = await axios({
          url: url + data,
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        return res.data;
      } catch (err) {
        // console.log(err.response.data)
        return err.response.data;
      }
  };


export const Api = {
    getRequest
}