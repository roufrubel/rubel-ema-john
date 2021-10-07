import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider } from 'firebase/auth'
import { useState } from 'react';
import './App.css';
import initializeAuthentication from './Firebase/Firebase.initialize';
import image from '../src/Images/login.jpg'

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();


function App() {
  const [user, setUser] = useState({});

  const auth = getAuth();


  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const { displayName, email, photoURL } = result.user;
        const loggedInUser = {
          name: displayName,
          email: email,
          photo: photoURL
        };
        setUser(loggedInUser);
      })

      .catch(error => {
        console.log(error.message);
      })
  }



  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const { displayName, email, photoURL } = result.user;
        const loggedInUser = {
          name: displayName,
          email: email,
          photo: photoURL
        };
        setUser(loggedInUser);
      })

      .catch(error => {
        console.log(error.message);
      })
  }



  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then(result => {
        const { displayName, email, photoURL } = result.user;
        const loggedInUser = {
          name: displayName,
          email: email,
          photo: photoURL
        };
        setUser(loggedInUser);
      })

      .catch(error => {
        console.log(error.message)
      })
  }


  const handelSignOut = () => {
    signOut(auth).then(() => {
      setUser({});
    })
  }


  return (
    <div className="App">

      {!user.name ?      
<div>
<h1 className="text-danger mt-4"><span className="text-dark">WELCOME TO</span> ema-john</h1>
<div className="d-flex">
          <div className="user-form">
            <button className="btn btn-warning" onClick={handleGoogleSignIn}>Google Sign In</button> <br /><br />
            <button className="btn btn-success" onClick={handleGithubSignIn}>Github Sign In</button><br /><br />
            <button className="btn btn-primary" onClick={handleFacebookSignIn}>Facebook Sign In</button>
          </div>
          <div className="login-img">
            <img src={image} alt="" />
          </div>
        </div>
</div>

        :
        <button className="btn btn-danger" onClick={handelSignOut}>Sign Out</button>}

      <br />
      {
        user.name && <div>
          <h2>Welcome {user.name}</h2>
          <h2><img src={user.photo} alt="" /></h2>
        </div>
      }
      <div>

      </div>

    </div>
  );
}

export default App;
