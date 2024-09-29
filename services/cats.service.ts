import axios from 'axios';
import { Cat } from '../models/cat.model';

const CAT_API_URL = 'https://api.thecatapi.com/v1';
const apiKey = process.env.API_KEY;

export const getBreeds = async () => {
  const response = await axios.get(`${CAT_API_URL}/breeds`, {
    headers: { 'x-api-key': apiKey }
  });
  return response.data;
};

export const getBreedById = async (breedId: string) => {
  const response = await axios.get(`${CAT_API_URL}/breeds/${breedId}`, {
    headers: { 'x-api-key': apiKey }
  });
  return response.data;
};

export const searchBreeds = async (query: string) => {
  const response = await axios.get(`${CAT_API_URL}/breeds/search?q=${query}`, {
    headers: { 'x-api-key': apiKey }
  });
  return response.data;
};
