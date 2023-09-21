import axios from "axios";

// Create an Axios instance with interceptors
const api = axios.create();

// Request interceptor for adding authentication headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;

//In this example, we define a request interceptor that adds an "Authorization" header to each
//outgoing request, using a token stored in the browser's local storage.
// This header is typically used for authentication, and you can adapt it to
//your specific authentication mechanism.

//In summary, axiosInstance.interceptors.response.use allows you to globally
//intercept and handle responses from your API requests. The use method lets you specify
//how to handle both successful responses and errors consistently across your application.
// You can customize the error handling logic in the error handler function to suit your specific
//needs, such as displaying error messages to the user or taking other appropriate actions.
