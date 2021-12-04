import firebase  from 'firebase'; 
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCSVN-uv5LyvHrJVWUDDzlLxUYJ_jIbR0o",
  authDomain: "ecommercereact-2cbee.firebaseapp.com",
  projectId: "ecommercereact-2cbee",
  storageBucket: "ecommercereact-2cbee.appspot.com",
  messagingSenderId: "1059454593959",
  appId: "1:1059454593959:web:7c0b413a96ef396b53e482",
  measurementId: "G-FE5JCR9XL1"
};


const app = firebase.initializeApp(firebaseConfig);

export function getFirestone()
{
    return  firebase.firestore(app)
}