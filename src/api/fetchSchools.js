import axios from 'axios';

const SCHOOLS_API = "https://data.cityofnewyork.us/resource/s3k6-pzi2.json";
const SAT_API = "https://data.cityofnewyork.us/resource/f9bf-2cp4.json";

export const fetchSchools = async () => {
  const response = await axios.get(SCHOOLS_API);
  return response.data;
};

export const fetchSatScores = async () => {
  const response = await axios.get(SAT_API);
  return response.data;
};
