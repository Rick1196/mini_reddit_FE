import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import { auth, googleProvider } from "../../config/firebase";
import GoogleIcon from "../../icons/GoogleIcon";
import { sessionAPI } from "../../utils/api/session";

const GoogleAuthentication = () => {
  const router = useRouter();
  const handleGoogleAuthentication = () => {
    signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        const idToken = await auth.currentUser.getIdToken();
        try {
          await sessionAPI.login(idToken, result.user.email);
          router.push("/subs");
        } catch (error) {
          console.error(error);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <button
      className="flex flex-row items-center justify-items-center gap-2 bg-ownBlue text-white rounded p-2 w-full"
      onClick={handleGoogleAuthentication}
    >
      <span>
        <GoogleIcon />
      </span>
      Google login
    </button>
  );
};
export default GoogleAuthentication;
