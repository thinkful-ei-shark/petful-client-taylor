import config from '../config';

export const fetchPeople = () => {
  return fetch(`${config.API_BASE_URL}/people`).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  });
};

export const postPerson = person => {
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

export const fetchDogs = () => {
  return fetch(`${config.API_BASE_URL}/pets/dogs`).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
}

export const fetchCats = () => {
  return fetch(`${config.API_BASE_URL}/pets/cats`).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
}

export const adoptPet = () => {
  return fetch(`${config.API_BASE_URL}/pets`, {
    method: 'DELETE',
    header: {
      'content-type': 'application/json',
    },
  }).then(res => {
    if (!res.ok) {
      throw new Error(
        `Something went wrong adopting this pet, please try again later`
      );
    }
  });
};
