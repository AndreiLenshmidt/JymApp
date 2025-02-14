import { firebaseAuth } from "../firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  signOut,
} from "firebase/auth";

// Экспортируем auth-методы созданные с помошью импортированных из Firebase методов
export const createUser = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password);
};
export const signInUser = async (email: string, password: string) => {
  return signInWithEmailAndPassword(firebaseAuth, email, password);
};
// Sign in with email and password
export async function signInWithCredentials(email: string, password: string) {
  try {
    return setPersistence(firebaseAuth, browserSessionPersistence).then(
      async () => {
        const userCredential = await signInWithEmailAndPassword(
          firebaseAuth,
          email,
          password
        );
        return {
          success: true,
          user: userCredential.user,
          error: null,
        };
      }
    );
  } catch (error: any) {
    return {
      success: false,
      user: null,
      error: error.message || "Failed to sign in with email/password",
    };
  }
}

// Экспортируем функцию выходы из учетки
export const signout = async () => {
  signOut(firebaseAuth)
    .then(() => {
      // Sign-out successful.
      console.log("выход из учетки");
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
      console.log("выход из учетки не удался");
    });
};
