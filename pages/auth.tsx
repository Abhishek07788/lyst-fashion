import LoginSignup from "@/src/components/auth/LoginSignup";
import Layout from "@/src/layouts/Layout";
import React from "react";

const AuthPages = () => {
  return (
    <Layout pageName="Login">
      <LoginSignup />
    </Layout>
  );
};

export default AuthPages;
