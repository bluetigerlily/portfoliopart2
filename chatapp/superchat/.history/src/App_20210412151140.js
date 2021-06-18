import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { userAuthState} from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  
    apiKey: "AIzaSyBXQFyXmB-M919_V9rFLqiSNN5Z90Jo1mE",
    authDomain: "superchat-c45d4.firebaseapp.com",
    projectId: "superchat-c45d4",
    storageBucket: "superchat-c45d4.appspot.com",
    messagingSenderId: "218690931019",
    appId: "1:218690931019:web:d2c3e408b1ca90dd4680ce",
    measurementId: "G-RJY99F7YJ1"
  
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}
const [user] = userAuthState(auth);

return(
  <div className="App">
    <header>

    </header>
    <section>
      
    </section>
  </div>

export default App;
