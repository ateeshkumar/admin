import React from "react";
import { useState } from "react";
// import { useAuth } from "../context/auth";
import { useEffect } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import { useAuth } from "../auth";
import CircleLoader from "../../components/CircleLoader";

const AdminRoute = () => {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();
  console.log(auth);
  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get("http://localhost:8086/api/user/admin-auth");
      if (res.data.response == "success") {
        console.log(res);
        setOk(true);
      } else {
        console.log(res);
        setOk(false);
      }
    };
    if (auth) authCheck();
  }, []);
  return ok ? <Outlet /> : <CircleLoader path="" />;
};

export default AdminRoute;
