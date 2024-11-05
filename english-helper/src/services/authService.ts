import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { setUser } from "../store/slices/userSlice";
import { AppDispatch } from "../store";

export type SignUpArgs = {
  email: string;
  password: string;
  dispatch: AppDispatch;
};

export const logIn = async ({ email, password, dispatch }: SignUpArgs) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  const uid = userCredential.user.uid;
  const token = userCredential.user?.accessToken;

  const userData = JSON.parse(localStorage.getItem(uid) as string);
  console.log(userData);
  // const userDoc = await getDoc(doc(db, "users", uid));
  // const userData = userDoc.data();
  dispatch(setUser({ uid, token, email }));
  return null;
};
