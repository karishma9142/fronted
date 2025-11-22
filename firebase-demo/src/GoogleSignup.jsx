import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";

export default function GoogleSignup() {
  async function handleGoogleSignup() {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User:", result.user);
      alert("Google Sign-in Successful!");
    } catch (error) {
      console.error(error);
      alert("Error: " + error.message);
    }
  }

  return (
    <div>
      <h2>Sign Up with Google</h2>
      <button onClick={handleGoogleSignup}>Continue with Google</button>
    </div>
  );
}
