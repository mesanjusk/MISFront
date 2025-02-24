import { useEffect, useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("Guest");

  useEffect(() => {
    const storedUser = localStorage.getItem("User_name");
    if (storedUser) {
      setUsername(storedUser);
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-3xl font-bold">Welcome, {username}!</h1>
    </div>
  );
}
