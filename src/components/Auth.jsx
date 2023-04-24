import { auth } from "./firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


export const Auth = ({ setUser }) => {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setUser({ id: user.uid, displayName: user.displayName, photoURL: user.photoURL })
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="m-4 text-2xl">Welcome to Acebook</h1>
            <button className="bg-gray-900 text-white rounded-full py-2 px-4" onClick={signInWithGoogle}>
                Sign in with google
            </button>
        </div>

    );
}