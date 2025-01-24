import { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import { ref, child, get, set, remove, push } from "firebase/database";

export default function LoginPage() {
  const [database, setDb] = useState<
    Array<{ username: string; email: string }>
  >([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const dbRef = ref(db);
    get(child(dbRef, "users/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setDb(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    get(child(dbRef, "current/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setCounter(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // useEffect(() => {
  //   const starCountRef = ref(db, "users");
  //   onValue(starCountRef, (snapshot) => {
  //     const data = snapshot.val();
  //     setDb(data);
  //   });
  // }, []);

  const reWriteData = (name: String, email: String, current: number) => {
    console.log(current);
    const userListRef = ref(db, "users/");
    const newUserRef = push(userListRef);
    set(newUserRef, {
      username: name,
      email: email,
    });
    set(ref(db, "current/"), current);
    setCounter(counter + 1);
  };

  const removeData = (path: string) => {
    remove(ref(db, path));
  };

  return (
    <>
      <ul>
        {database.map((item) => (
          <li key={Date.now()}>
            {item.username} {item.email}
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          reWriteData(`Vasa${counter + 1}`, `Pup${counter + 1}`, counter + 1)
        }
      >
        Add User
      </button>
      <button
        onClick={() => {
          removeData("users/");
          removeData("current/");
          setDb([]);
        }}
      >
        Del users
      </button>
    </>
  );
}
