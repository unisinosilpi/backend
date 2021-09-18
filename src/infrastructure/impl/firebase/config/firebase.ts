import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCDVrAjSoSBnlYm2JdbH-pQ1z2qcJGb9Q4',
  authDomain: 'smartvitalsigns.firebaseapp.com',
  projectId: 'smartvitalsigns',
  storageBucket: 'smartvitalsigns.appspot.com',
  messagingSenderId: '634689667157',
  appId: '1:634689667157:web:1ded246cdb31bd70dc14dc',
};

const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };
