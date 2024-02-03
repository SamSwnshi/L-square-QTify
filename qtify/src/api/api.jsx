import axios from "axios";

export const ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchAlbums = async () => {
  try {
    const response = await axios.get(`${ENDPOINT}/albums/top`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchNewAlbums = async () => {
  try {
    const response = await axios.get(`${ENDPOINT}/albums/new`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchNewSongs = async () => {
  try {
    const response = await axios.get(`${ENDPOINT}/songs`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchFilters = async () => {
  try {
    const response = await axios.get(`${ENDPOINT}/genres`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

