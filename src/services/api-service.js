import config from '../config';

export const fetchPeople = () => {
  return fetch(`${config.API_BASE_URL}/people`).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  });
};

export const fetchPets = () => {
  return fetch(`${config.API_BASE_URL}/pets`).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  });
};
