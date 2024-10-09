import React, { useEffect, useState } from "react";
import UserCard from "./Components/UserCard";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const resalt = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!resalt.ok) {
          throw new Error("NetWork Is Error");
        }

        const data = await resalt.json();
        console.log(data);

        setUsers(data);
        toast.success("API installed successfully");
      } catch (error) {
        toast.error(error.message);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <Toaster />
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;
``;
