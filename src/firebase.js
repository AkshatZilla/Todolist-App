import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyA3enpDbRLuNmcGUsZXG8Nu-CdvlcFwxdA',
	authDomain: 'todolist-app-demo.firebaseapp.com',
	projectId: 'todolist-app-demo',
	storageBucket: 'todolist-app-demo.appspot.com',
	messagingSenderId: '177692862054',
	appId: '1:177692862054:web:63e9e9487418643f3b2fa7'
});

const db = firebaseApp.firestore();
export default db;
