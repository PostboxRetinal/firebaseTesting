import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import firebase from 'firebase/app';
import 'firebase/auth'; // Import Firebase Authentication (optional)

export const Auth = () => {
    initializeApp({
        credential: cert(serviceAccount)
    });
    const auth = firebase.auth();
};

console.log(`Connected @ Firebase instance ${parsedConfig.authDomain}`);