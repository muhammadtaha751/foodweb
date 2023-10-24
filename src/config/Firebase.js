import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDJxqqnWgomiNzLsXVuciER1k9IzntkEJU",
    authDomain: "foodpanda-e9ef3.firebaseapp.com",
    databaseURL: "https://foodpanda-e9ef3-default-rtdb.firebaseio.com",
    projectId: "foodpanda-e9ef3",
    storageBucket: "foodpanda-e9ef3.appspot.com",
    messagingSenderId: "30886093599",
    appId: "1:30886093599:web:d0af9ee02753ac1cb7062a",
    measurementId: "G-CSK9XR3NJ1"
  };


  const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

function register(email, password, fullName, age) {
    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            try {
                const docRef = await addDoc(collection(db, "users"), {
                    fullName,
                    email,
                    age,
                });
               
                alert('successfully register')
                console.log("Document written with id", docRef.id);
            } catch (e) {
                console.error("Error adding document", e);
                alert(e.message)
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message
            alert(errorMessage)
        });
}

function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert('successfully login')
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
}


  export {
    register,
    login,
    
  }