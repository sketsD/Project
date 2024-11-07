import { PropsWithChildren } from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

type ProtectedProps = PropsWithChildren & {
  allowdRoles: "admin" | "student" | "tutor";
};

export default function ProtectedRoute({
  allowdRoles,
  children,
}: ProtectedProps) {
  const { isAuth, role } = useAuth();
  if (!isAuth) return <Navigate to={"/login"} replace />;
  if (role && !allowdRoles.includes(role))
    return <Navigate to="/invalid" replace />;

  return <>{children}</>;
}
