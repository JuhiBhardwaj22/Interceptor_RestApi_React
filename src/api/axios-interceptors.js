import axios from "axios";

// Create an Axios instance

const axiosInstance = axios.create();
console.log(axiosInstance);

// Response error interceptor

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle response errors here

    if (error.response) {
      const { status, data } = error.response;

      if (status === 401) {
        // Handle unauthorized access (e.g., redirect to login page)
        // You can customize this based on your application's needs
        console.error("Unauthorized Access:", data);
      } else if (status === 404) {
        console.error("Not Found Error:", data);
      } else if (status === 500) {
        console.error("Internal Server Error:", data);
      } else {
        // Handle other error responses (e.g., display an error message)
        console.error("Server Error:", status, data);
      }
    } else if (error.request) {
      // The request was made, but no response was received from the server
      console.error("Network Error:", error.request);
    } else {
      // Something else happened while setting up the request
      console.error("Error:", error.message);
    }
    // Pass the error along
    return Promise.reject(error);
  }
);

export default axiosInstance;
