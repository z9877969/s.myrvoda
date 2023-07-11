import axios from 'axios';

// const BASE_URL = 'https://6475b9a3e607ba4797dc712f.mockapi.io/tutors';
const BASE_URL =
  'https://njordmarineapp-default-rtdb.europe-west1.firebasedatabase.app';

// const fetchData = async (path, options = {}) => {
//   const res = await fetch(`${BASE_URL}/${path}.json`, options);
//   return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
// };

axios.defaults.baseURL =
  'https://njordmarineapp-default-rtdb.europe-west1.firebasedatabase.app';

// const getData = (endpoint, options) => fetchData(endpoint, options);
const getData = endpoint => {
  return axios
    .get(endpoint + '.json')
    .then(({ data }) =>
      data ? Object.entries(data).map(([id, data]) => ({ id, ...data })) : [],
    ); //
  // /qwe.json -> {  }
  /* 
   {
     vnbvnbvnbv1: item,
        vnbvnbvnbv2: item,
        vnbvnbvnbv3: item,
   }
   [{id:vnbvnbvnbv1,  ...item1}]
  */
};

// const saveItem = (endpoint, item, options = {}) => {
//   const finalOptions = {
//     method: 'POST',
//     // body: item,
//     body: JSON.stringify(item),
//     headers: {
//       'Content-Type': 'application/json; charset=UTF-8',
//     },
//     ...options,
//   };
//   return fetchData(endpoint, finalOptions);
// };
const saveItem = (endpoint, item, options) => {
  // const {itemTitle, imageUrl, } = item
  return axios
    .post(endpoint + '.json', item)
    .then(response => ({ ...item, id: response.data.name }));
  // /qwe, item4
  // {name: "vnbvnbvnbv4"} -> {...item4, id: response.data.name}
  /* 
    {
      qwe: {
        vnbvnbvnbv1: item,
        vnbvnbvnbv2: item,
        vnbvnbvnbv3: item,
      }
    }
  */
  //  /qwe/vnbvnbvnbv.json -> item
};

const editItemApi = ({ endpoint, item, id }) => {
  return axios
    .patch(`${endpoint}/${id}.json`, item)
    .then(response => ({ ...response.data, id }));
  // /qwe, item4
  // {name: "vnbvnbvnbv4"} -> {...item4, id: response.data.name}
  /* 
    {
      qwe: {
        vnbvnbvnbv1: item,
        vnbvnbvnbv2: item,
        vnbvnbvnbv3: item,
      }
    }
  */
  //  /qwe/vnbvnbvnbv.json -> item
};

const addBrendApi = ({ pathname, brend }) => {
  return axios
    .post(pathname + '/brends.json', { brend })
    .then(({ data }) => ({ id: data.name, brend }));
};

// const editItem = (endpoint, item, options = {}) => {
//   const finalOptions = {
//     method: 'PUT',
//     body: JSON.stringify(item),
//     headers: {
//       'Content-Type': 'application/json; charset=UTF-8',
//     },
//     ...options,
//   };
//   return fetchData(`${endpoint}/${item.id}`, finalOptions);
// };

// const deleteItem = (endpoint, id, options = {}) =>
//   fetchData(`${endpoint}/${id}`, { method: 'DELETE', ...options });

export {
  getData,
  saveItem,
  editItemApi,
  addBrendApi,
  // , editItem, deleteItem
};

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

// ===============================
// const item = {
//   brends: {
//     0: 'TYCO',
//     1: 'HONEYWELL',
//     2: 'AUTRONICA',
//     3: 'CONSILIUM',
//     4: 'THORN',
//     5: 'VIKING',
//     6: 'SABROE',
//     7: 'DRAGER',
//     8: {brend: 'UNITOR'},
//     '-NZeWLNbgufXL61T4NOR': { brend: 'test brend' },
//   },
//   id: '3',
//   imgUrl: 'images/spares/engi-fire-security.png',
//   itemTitle: 'Системы противопожарной и охранной защиты',
// };

/* 
 const transfBrends = Object.entries(item.brends).map(
  ([id, brend]) => {
   if (typeof brend === "string") {
     return { id, brend };
   }
   return { id, ...brend };
 }
 );
 [{id, brend}, {id, brend}, {id, brend}]

*/
