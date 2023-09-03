import RootLayout from "@/components/Layouts/RootLayout";
import { signIn } from "next-auth/react";
import React from "react";

const login = () => {
  return (
    <>
      <h1>login</h1>
      <button
        onClick={() =>
          signIn("google", {
            callbackUrl: "http://localhost:3000/",
          })
        }
      >
        Login
      </button>
    </>
  );
};

export default login;

login.getLayout = function getLayout(page: React.ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};