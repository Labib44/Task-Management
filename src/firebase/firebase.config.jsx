// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy8jVnQvDxkyyYOuctNUFPeaBx8Z0Js7A",
  authDomain: "task-management-system-redux.firebaseapp.com",
  projectId: "task-management-system-redux",
  storageBucket: "task-management-system-redux.appspot.com",
  messagingSenderId: "394980355181",
  appId: "1:394980355181:web:242927312e133c78766364"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;