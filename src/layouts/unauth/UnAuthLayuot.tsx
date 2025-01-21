import { useEffect } from "react";
import { Outlet } from "react-router";
// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";

export default function UnAuthLayout() {
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jymapp-1c753-default-rtdb.europe-west1.firebasedatabase.app/user1"
      );
      const data = await response.json();
      console.log(data);
    };
    getData();
  }, []);

  return (
    <>
      <h1>UnAuthLayout</h1>
      <Outlet />
    </>
  );
}
