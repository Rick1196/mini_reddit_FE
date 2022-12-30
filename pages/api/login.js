import { setAuthCookies } from "next-firebase-auth";
import initAuth from "../../config/initAuth";

initAuth();

const handler = async (req, res) => {
  try {
    // await setAuthCookies(req, res);
    return res.status(200).json({ success: true });
  } catch (e) {
    return res.status(500).json({ error: "Unexpected error." });
  }
};

export default handler;
