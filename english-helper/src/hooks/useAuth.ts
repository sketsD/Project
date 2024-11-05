import { useUserSelector } from "../store/hooks";

export function useAuth() {
  const { email, token, uid } = useUserSelector((state) => state.user);
  return {
    isAuth: !!email,
    email,
    token,
    uid,
  };
}
