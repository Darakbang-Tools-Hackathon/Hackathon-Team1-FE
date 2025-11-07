import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3002',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getSensorLocations = async () => {
  try {
    const response = await axiosInstance.get('/sensors');
    return response.data;
  } catch (error) {
    console.error("Error fetching sensor locations:", error);
    throw error;
  }
};

export default axiosInstance;