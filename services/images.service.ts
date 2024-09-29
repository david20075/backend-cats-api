import axios from 'axios';

const CAT_API_URL = 'https://api.thecatapi.com/v1';
const apiKey = process.env.API_KEY;

export const getImagesByBreedId = async (breedId: string) => {
  const response = await axios.get(`${CAT_API_URL}/images/search?breed_id=${breedId}`, {
    headers: { 'x-api-key': apiKey }
  });
  return response.data;
};
