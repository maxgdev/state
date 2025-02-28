import * as firebase from './node_modules/firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: process.env.REACT_APP_API_KEY,
authDomain: process.env.REACT_APP_AUTH_DOMAIN,
databaseURL: process.env.REACT_APP_DATABASE_URL,
projectId: process.env.REACT_APP_PROJECT_ID,
storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
appId: process.env.REACT_APP_MESSAGING_APP_ID,
measurementId: process.env.REACT_APP_MEASUREMENT_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;

