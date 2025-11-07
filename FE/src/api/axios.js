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

export const getVitaScores = async () => {
  try {
    const response = await axiosInstance.get('/vitascores');
    return response.data;
  } catch (error) {
    console.error("Error fetching vita scores:", error);
    throw error;
  }
};

export const getSubScores = async () => {
  try {
    const response = await axiosInstance.get('/subscores');
    return response.data;
  } catch (error) {
    console.error("Error fetching sub-scores:", error);
    throw error;
  }
};

export const getAlerts = async () => {
  try {
    const response = await axiosInstance.get('/alerts');
    return response.data;
  } catch (error) {
    console.error("Error fetching alerts:", error);
    throw error;
  }
};

export const uploadFloorPlan = async (file) => {
  try {
    const formData = new FormData();
    formData.append('floorPlan', file);
    const response = await axiosInstance.post('/upload-floorplan', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error uploading floor plan:", error);
    throw error;
  }
};

export default axiosInstance;