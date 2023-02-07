import { auth, provider } from "../firebase-config"
import { browserSessionPersistence, setPersistence, signInWithPopup } from 'firebase/auth'


export const Auth = ({ setUser }) => {
    const signInWithGoogle = () => {
        setPersistence(auth, browserSessionPersistence)
            .then(() => {
                return signInWithPopup(auth, provider)
            }).then((result) => {
                setUser(result.user)
            }).catch((error) => {
                console.error(error)
            })
    }
    return (
        <div className="auth">
            <p>
                Sign in with Google to continue
            </p>
            <button className="button" onClick={signInWithGoogle}>
                Sign in with Google
            </button>
        </div>
    )
}