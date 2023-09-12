import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Middleware = () => {
  console.log("MiddleWare active");
  useEffect(() => {
    if (!localStorage.theme) {
      localStorage.theme = "dark";
    }
  });
  return <Outlet />;
};

export default Middleware;
