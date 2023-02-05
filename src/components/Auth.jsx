import { auth, provider } from "../firebase-config"
import { signInWithPopup } from 'firebase/auth'
import Cookies from "js-cookie"

export const Auth = () => {
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider)
            Cookies.set('auth-token', result.user.refreshToken)

        } catch (err) {
            console.error(err)
        }
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