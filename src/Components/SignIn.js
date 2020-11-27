import React from 'react';
import firebase from 'firebase/app';

function SignIn(props){

    const signInWithGoogle = () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        props.auth.signInWithPopup(provider);
    }

    return (
        <>
            <h2>Welcome to <strong>World Chat</strong></h2>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </>
    )
}

export default SignIn;