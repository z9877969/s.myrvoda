// const BASE_URL = 'https://6475b9a3e607ba4797dc712f.mockapi.io/tutors';
const BASE_URL =
  'https://njordmarineapp-default-rtdb.europe-west1.firebasedatabase.app';

const fetchData = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}/${path}.json`, options);
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

const getData = (endpoint, options) => fetchData(endpoint, options);

const saveItem = (endpoint, item, options = {}) => {
  const finalOptions = {
    method: 'POST',
    // body: item,
    body: JSON.stringify(item),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    ...options,
  };
  return fetchData(endpoint, finalOptions);
};

const editItem = (endpoint, item, options = {}) => {
  const finalOptions = {
    method: 'PUT',
    body: JSON.stringify(item),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    ...options,
  };
  return fetchData(`${endpoint}/${item.id}`, finalOptions);
};

const deleteItem = (endpoint, id, options = {}) =>
  fetchData(`${endpoint}/${id}`, { method: 'DELETE', ...options });

export { getData, saveItem, editItem, deleteItem };

// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getFirstore } from '@firebase/firestore';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// console.log(getFirstore);
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyCnKrezw1kvNBFwVfNcIUExWmJ-MaHAcvM',
//   authDomain: 'njordmarineapp.firebaseapp.com',
//   databaseURL:
//     'https://njordmarineapp-default-rtdb.europe-west1.firebasedatabase.app',
//   projectId: 'njordmarineapp',
//   storageBucket: 'njordmarineapp.appspot.com',
//   messagingSenderId: '102935445854',
//   appId: '1:102935445854:web:06df16dac1af3446b08fcf',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default getFirstore();
