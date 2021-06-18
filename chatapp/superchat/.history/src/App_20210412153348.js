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
      {user ? <ChatRoom /> : <SignIn />}
    </section>
  </div>
);
}  

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithGoogle(provider);
  }
  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}
function SignOut() {
return auth.currentUser && (
  <button onClick={() => auth.signOut()}>Sign Out</button>
)
}


function ChatRoom() {

  const messageRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, {idField: 'id'});
const [formValue, setFormValue] = useState('');

const sendMessage = async(e) =>{
  e.preventDefault();

  const { uid, photoURL } = auth.currentUser;

  await messagesRef.add({
    text: formValue,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    uid,
    photoURL
  });
  setFormValue('');
}

  return (
    <>
    <main>
      {message && messages.map(msg => <ChatMessage key = {msg.id}
       message = {msg}  />)}
       <div ref={}
    </main>
        <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
        <button type="submit"></button>

        </form>

  </>
  )
  }

  function ChatMessage(props) {
    
    const { text, uid, photoURL } = props.message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    return (
      <div className={'messagve ${messageClass}'}>
        <p>{text}</p>
      </div>
    )
  }


export default App;
