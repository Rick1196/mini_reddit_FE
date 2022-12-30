import { useRouter } from "next/router";
import RightArrowIcon from "../../icons/RightArrow";
import { sessionAPI } from "../../utils/api/session";

const LogoutButton = ({ authUser }) => {
  const router = useRouter();
  const handleLogout = async () => {
    await authUser.signOut();
    await sessionAPI.logout();
    router.push("/login");
  };
  return (
    <button
      className="w-full bg-blue rounded flex flex-row gap-2 justify-center items-center bg-ownBlue text-white p-2"
      onClick={handleLogout}
    >
      <span>Logout</span>
      <span>
        <RightArrowIcon />
      </span>
    </button>
  );
};

export default LogoutButton;
