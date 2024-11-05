import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
// import { getFirestore, doc, setDoc } from "firebase/firestore";

export type registerArgs = {
  firstName: string;
  secondName: string;
  //   tel: string,
  email: string;
  password: string;
  //   role: "admin" | "tutor" | "student"
};

// const auth = getAuth();
// const db = getFirestore();

export const registerUser = async ({
  firstName,
  secondName,
  email,
  password,
}: registerArgs) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    localStorage.setItem(
      user.uid,
      JSON.stringify({
        firstName,
        secondName,
        email,
        password,
        createdAt: new Date(),
      })
    );

    // await setDoc(doc(db, "users", user.uid), {
    //   firstName,
    //   secondName,
    //   //   tel,
    //   //   role,
    //   email: user.email,
    //   createdAt: new Date(),
    // });
    console.log("User registered and data saved:", user);
    return user;
  } catch (error) {
    console.error("Error registering user:", error);
  }
};
