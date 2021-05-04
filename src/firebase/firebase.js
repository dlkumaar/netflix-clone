import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// initialize firebase auth method
export const auth = firebase.auth();

// provider instance object for auth object
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// //////////////////////////////////////////////////////////////

// 1) GOOGLE SIGN IN POPUP
export const signInWithGoogle = () =>
	auth
		.signInWithPopup(provider)
		.then((result) => {
			const credential = result.credential;

			// This gives you a Google Access Token. You can use it to access the Google API.
			const token = credential.accessToken;

			// The signed-in user info.
			const user = result.user;
		})

		// Handle Errors here.
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;

			// The email of the user's account used.
			const email = error.email;

			// The firebase.auth.AuthCredential type that was used.
			const credential = error.credential;
		});

export const signOutFromGoogle = () => auth.signOut();

// /////////////////////////////////////////////////////////

// 2) SIGN UP WITH EMAIL
export function signUpWithEmailPassword(email, password) {
	// const email = 'test@example.com';
	// const password = 'hunter2';
	// [START auth_signup_password]
	firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..
		});
	// [END auth_signup_password]
}

// //////////////////////////////////////////////////////////////

// 3) SIGN IN WITH EMAIL AND PASSWORD
export function signInWithEmailPassword(email, password) {
	// const email = 'test@example.com';
	// const password = 'hunter2';
	// // [START auth_signin_password]
	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
		});
	// [END auth_signin_password]
}

export default firebase;
