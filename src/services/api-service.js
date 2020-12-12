import config from '../config';

export const fetchPeople = () => {
  return fetch(`${config.API_BASE_URL}/people`).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  });
};

export const postPerson = (person) => {
  return fetch(`${config.API_BASE_URL}/people`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      person,
    }),
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
}

export const fetchPets = () => {
  return fetch(`${config.API_BASE_URL}/pets`).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  });
};