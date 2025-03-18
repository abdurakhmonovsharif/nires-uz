import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "@/constants";
import { AuthProps } from "./util";
import { useAuthStore } from "@/store";

export const Protected: FC<AuthProps> = () => {
  const { isAuth } = useAuthStore();
  // useEffect(() => {
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setIsAuth(true);
  //       setUser({
  //         uid: user.uid,
  //         displayName: user.displayName || "",
  //         email: user.email || "",
  //       });
  //       console.log(user);
  //       console.log(isAuth);
  //     } else {
  //       history.push("/login");
  //     }
  //   });
  // }, [isAuth, setIsAuth, setUser]);

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTES.login} relative={"path"} replace />
  );
};
