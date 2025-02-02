import axios from "axios";

const API = import.meta.env.VITE_API;
// const API = "http://localhost:1111";

const getCities = async () => {
    return axios.get(`${API}/api/v8/getCity`);
}

const getCity = async (id) => {
    return axios.get(`${API}/api/v8/getCity/${id}`);
}

const addCity = async (data) => {
    return axios.post(`${API}/api/v8/addCity`, data);
}

//not created in server
const updateCity = async (id, data) => {
    return axios.put(`${API}/api/v8/updateCity/${id}`, data);
}


const deleteCity = async (id) => {
    return axios.delete(`${API}/api/v8/deleteCity/${id}`);
}

export { getCities, getCity, addCity, updateCity, deleteCity };


// features crud

const getFeatures = async () => {
    return axios.get(`${API}/api/v9/getFeatures`);
}

const addFeature = async (data) => {
    axios.post(`${API}/api/v9/addFeature`, data);
}

export { getFeatures, addFeature };