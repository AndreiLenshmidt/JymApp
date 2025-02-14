import { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import { ref, set, remove, push, onValue, off } from "firebase/database";
// import BearsCounter from "../../components/BearsCounter";

export default function TestFirebaseBD() {
  const [database, setDb] = useState<Array<{ name: string; email: string }>>(
    []
  );
  // const counter = useMemo(() => Object.keys(database).length, []);

  // Получить данные один раз

  // useEffect(() => {
  //   const dbRef = ref(db);
  //   get(child(dbRef, "users/"))
  //     .then((snapshot) => {
  //       if (snapshot.exists()) {
  //         console.log(snapshot.val());
  //         // console.log(typeof snapshot.val());
  //         setDb(snapshot.val());
  //       } else {
  //         console.log("No data available");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });

  //   get(child(dbRef, "current/"))
  //     .then((snapshot) => {
  //       if (snapshot.exists()) {
  //         console.log(snapshot.val());
  //         setCounter(snapshot.val());
  //       } else {
  //         console.log("No data available");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  // Слушаем БД по ссылке /users
  useEffect(() => {
    // dbRef - переменная которая указывает на БД с query '/users'
    const dbRef = ref(db, "users/");
    // включаем слушатель БД по указанному URL ('...db/users')
    onValue(dbRef, (snapshot) => {
      // делаем snapshot (срез, снимок) состяния БД, т.е. получаем значения по указанному URL
      const data = snapshot.val();
      // устанавливаем полученное значение в state
      setDb(data);
      // console.log(data);
    });
    // отключаем слушателей БД
    return () => off(dbRef);
  }, []);

  // Фкц перезаписи данных в БД, добавляет юзера (name, email) в БД
  const reWriteData = (name: String, email: String) => {
    const userListRef = ref(db, "users/");
    const newUserRef = push(userListRef);

    set(newUserRef, {
      name,
      email,
    });
  };
  // Фкц удаления всех пользователей из БД
  const removeData = (path: string) => {
    remove(ref(db, path));
  };

  

  return (
    <>
      <h2>Страница LoginPage вывод пользоваелей из БД</h2>
      <ul>
        {database &&
          Object.values(database).map((item, index) => (
            <li key={index}>
              {item.name} {item.email}
            </li>
          ))}
      </ul>
      <button
        onClick={() =>
          reWriteData(
            `Vasa${Object.keys(database).length + 1}`,
            `Pup${Object.keys(database).length + 1}`
          )
        }
      >
        Add User
      </button>
      <button
        onClick={() => {
          removeData("users/");
          setDb([]);
        }}
      >
        Del users
      </button>
      <h2>Хранилище zustand с сохранение данных в localstore</h2>
      {/* <BearsCounter /> */}
    </>
  );
}
