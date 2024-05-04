import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "1:210040004778:android:0900263418d2d2d3c1b0d3",
    projectId: "todo-26930",
    storageBucket: "todo-26930.appspot.com",
    appId: "1:210040004778:android:0900263418d2d2d3c1b0d3"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;