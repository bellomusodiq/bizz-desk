import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/auth/new-password");
  }, []);
  return null;
};

export default Home;
