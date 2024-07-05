import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Use environment variables for the base URL
  headers: {
    'Content-Type': 'application/json',
    
  },
});

// Add a request interceptor
// axiosInstance.interceptors.request.use(
//   // config => {
//   //   // Modify config before the request is sent, for example, add authentication tokens
//   //   const token = localStorage.getItem('token'); // Example for client-side only
//   //   if (token) {
//   //     config.headers.Authorization = `Bearer ${token}`;
//   //   }
//   //   return config;
//   // },
//   error => {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// axiosInstance.interceptors.response.use(
//   response => {
//     // Any status code within the range of 2xx causes this function to trigger
//     return response;
//   },
//   error => {
//     // Any status codes outside the range of 2xx cause this function to trigger
//     // You can handle global errors here
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;