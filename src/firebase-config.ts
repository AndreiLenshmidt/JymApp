import { initializeApp } from "firebase/app";
// import { getFirestore } from "@firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, // исправить перенесть в .env
  authDomain: import.meta.env.VITE_FIREBASE_APP_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DB_BASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_APP_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
// Экспортируем созданную БД
export const db = getDatabase(app);
// Экспортируем getAuth(app) в другие файлы
export const firebaseAuth = getAuth(app);

/* Слушатель состояния аутентификации, позволяет получить данные пользователя
Для каждой из страниц вашего приложения, которым нужна информация о вошедшем в систему пользователе, прикрепите наблюдателя к глобальному объекту аутентификации. Этот наблюдатель вызывается всякий раз, когда изменяется состояние входа пользователя. 
Когда пользователь успешно входит в систему, вы можете получить информацию о пользователе в наблюдателе. */
onAuthStateChanged(getAuth(), (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(uid);
    // console.log(user);
    // return user;
  } else {
    // User is signed out
    console.log("User is signed out");
  }
});
