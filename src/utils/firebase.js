import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvrLgBJrTlxOuKN2yLJQqq2czjUxb2dSA",
  authDomain: "todo-react-9a2ca.firebaseapp.com",
  projectId: "todo-react-9a2ca",
  storageBucket: "todo-react-9a2ca.appspot.com",
  messagingSenderId: "673139994626",
  appId: "1:673139994626:web:176fd65f59c74b14f8b71b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };