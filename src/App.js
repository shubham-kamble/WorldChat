import React, { useEffect } from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import SignIn from './Components/SignIn';
import ChatRoom from './Components/ChatRoom';

firebase.initializeApp({
    apiKey: "AIzaSyCKTEaHJRbv8t0FML55XzBpFIa6aynSSgs",
    authDomain: "w0rld-chat.firebaseapp.com",
    databaseURL: "https://w0rld-chat.firebaseio.com",
    projectId: "w0rld-chat",
    storageBucket: "w0rld-chat.appspot.com",
    messagingSenderId: "291093871584",
    appId: "1:291093871584:web:f9606751ca4295ecb60985",
    measurementId: "G-C60XF8QLJC"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);

  useEffect(()=>{
    console.log(user);
  });

  return (
    <div className="App">
      <header>
        <h1>WorldChat</h1>
        {user ? <button onClick={()=>auth.signOut()}>Logout</button>:<p/>}
      </header>
      <section>
        {user ? <ChatRoom auth={auth} firestore={firestore} user={user}/>:<SignIn auth={auth}/>}
      </section>
    </div>
  );
}

export default App;
