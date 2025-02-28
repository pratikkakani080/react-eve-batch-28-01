import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.restful-api.dev",
  timeout: 1000,
  headers: {
    "X-Custom-Header": "foobar",
    Authorization: "Bearer token",
  },
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log("config**", config);
    let Authorization =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30";
    config.headers = { Authorization };

    return config;
  },
  function (error) {
    // Do something with request error
    console.log("error**", error);

    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("response**", response);

    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("error**", error);

    return Promise.reject(error);
  }
);
