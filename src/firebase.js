import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyD3Pm2Bn1tvr9xnIfCuxnLsQnlo_dh4M-0',
	authDomain: 'shivam-amazn-clone.firebaseapp.com',
	projectId: 'shivam-amazn-clone',
	storageBucket: 'shivam-amazn-clone.appspot.com',
	messagingSenderId: '625401380226',
	appId: '1:625401380226:web:8e75ca73dde87bc8d0239b',
	measurementId: 'G-D34WE9VTEB',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
