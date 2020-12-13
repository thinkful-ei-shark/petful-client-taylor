import config from '../config';

export const fetchPeople = () => {
  return fetch(`${config.API_BASE_URL}/people`).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  });
};

export const fetchDogList = () => {
  return fetch(`${config.API_BASE_URL}/dog-list`).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  });
};

export const fetchCatList = () => {
  return fetch(`${config.API_BASE_URL}/cat-list`).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  });
};

// export const postPerson = person => {
//   return fetch(`${config.API_BASE_URL}/people`, {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json',
//     },
//     body: JSON.stringify({
//       person,
//     }),
//   }).then(res => {
//     if (!res.ok) {
//       return Promise.reject(res.statusText);
//     }
//     return res.json();
//   });
// };

export const postDogPerson = person => {
  return fetch(`${config.API_BASE_URL}/dog-list`, {
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

export const postCatPerson = person => {
  return fetch(`${config.API_BASE_URL}/cat-list`, {
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
  return fetch(`${config.API_BASE_URL}/dogs`).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  });
};

export const fetchCats = () => {
  return fetch(`${config.API_BASE_URL}/cats`).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  });
};

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
