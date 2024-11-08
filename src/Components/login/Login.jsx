import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/Firebase.init";
import { useState } from "react";

const Login = () => {

    const [user, setUser] = useState(null)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        console.log('google coming soon')
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user)
                setUser(result.user)
            })
            .catch(error => {
                console.log("ERROR", error)
                setUser(null)
            })
    }
    const handleGithubSignIn = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            console.log(result.user)
            setUser(result.user)
        })
        .catch(error => console.log("Error", error))
    }
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('sign out done safely')
                setUser(null)
            })
            .catch(error => console.log(error, "happend"))
    }

    return (
        <div>
            {/* <button onClick={handleGoogleSignIn}>Create account</button>
            <button onClick={handleSignOut}>Sign Out</button> */}
            {
                user ? <button onClick={handleSignOut}>Sign Out</button> :
                    <>
                        <button onClick={handleGoogleSignIn}>Create account</button>
                        <button onClick={handleGithubSignIn}>Login with git</button>
                    </>
            }
            {user && <div>
                <h3>{user.displayName}</h3>
                <h4>Email: {user.email}</h4>
                <img src={user.photoURL} alt="" />
            </div>
            }
        </div>
    );
};

export default Login;