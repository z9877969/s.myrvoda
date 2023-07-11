import { getStorage } from 'firebase/storage';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAw3wCum4rVwVzGPGPbRjIvLjk0l7mZ7fI',
  authDomain: 'bc-51-a26cd.firebaseapp.com',
  databaseURL:
    'https://bc-51-a26cd-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'bc-51-a26cd',
  storageBucket: 'bc-51-a26cd.appspot.com',
  messagingSenderId: '1014572359137',
  appId: '1:1014572359137:web:45977e8f1910b42790c6a0',
  measurementId: 'G-B17B4B5ZN2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getStorage(app);
