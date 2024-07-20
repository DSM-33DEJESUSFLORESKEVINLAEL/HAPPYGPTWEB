// credenciales.js o credenciales.ts
import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log('User created:', userCredential.user);
        return userCredential.user;
    } catch (error) {
        console.error('Error signing up:', error.code, error.message);
        throw error;
    }
};

export const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in:', userCredential.user);
        return userCredential.user;
    } catch (error) {
        console.error('Error signing in:', error.code, error.message);
        throw error;
    }
};
