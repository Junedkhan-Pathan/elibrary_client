import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthLayout = () => {
  const pathname = window.location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/auth" || pathname == "/auth/") navigate("login");
  }, [pathname]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
