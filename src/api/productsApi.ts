import {URL} from '../constants/apiConstants';

export const getProducts = async () => {
  try {
    const response = await fetch(URL);
    const json = await response.json();
    console.log('json', json);
    return json;
  } catch (error) {
    console.error(error);
  }
};
