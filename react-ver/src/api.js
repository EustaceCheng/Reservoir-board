import axios from 'axios';

// reservoir ηΈιη api
const reservoirRequest = axios.create({
  baseURL: `https://www.taiwanstat.com/waters/latest`
});

export const apiReservoirRequest = () => reservoirRequest.get();