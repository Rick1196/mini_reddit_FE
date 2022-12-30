import { unsetAuthCookies } from "next-firebase-auth";
import { NextResponse } from "next/server";
import initAuth from "../../config/initAuth";

initAuth();

const handler = async (req, res) => {
  try {
    // await unsetAuthCookies(req, res);
    return res.status(200);
    // return NextResponse.redirect(new URL("/login", req.url));
  } catch (e) {
    return res.status(500).json(e);
  }
};

export default handler;
