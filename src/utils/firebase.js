import { initializeApp } from 'firebase/app';
import {getFirestore ,collection, getDocs, onSnapshot, addDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyBlhOua-L1Y2iKV_6KLz8Yvw5Nv4MBjJE8',
  authDomain: 'vibrate-543a2.firebaseapp.com',
  projectId: 'vibrate-543a2',
  storageBucket: 'vibrate-543a2.appspot.com',
  messagingSenderId: '423221861172',
  appId: '1:423221861172:web:16fcd2744f2b21e6442361',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(); 

export const createUser = async() => {
  try{
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user;
  }
  catch(error){
    alert("Error:" + error);
  };
}

export const getAllPosts = async (setPosts) => {
  const colRef = collection(db, 'posts');
  try {
    const snapshot = await getDocs(colRef);
    let data = [];
    snapshot.docs.map((doc) => {
      data = [...data, doc.data()];
    });
    setPosts(data);
  } catch (error) {
    alert('ERROR:' + error);
  }
};

export const createPost = async () => {
  try{
    const docRef = await addDoc(collection(db, "posts"), {
      username: "username",
      imageUrl: "Japan",
      caption: "I am a caption"
    });
  }
  catch(error){
    alert('Error' + error);
  }
}

export const deletePost = async (id) => {
  try{
    await deleteDoc(doc(db, "posts", id));
  }
  catch(error){
    alert('Error' + error);
  }
}


