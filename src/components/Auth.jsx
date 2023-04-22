import { auth } from "./firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


export const Auth = () => {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }
    return (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    );
}