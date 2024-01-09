import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    setLoading(true);

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await res.json();
      setUsers(json);
    } catch (err) {
      console.log("Deu algo errado ... ");
    }
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleAddNewPost = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-type": "application./json, charset=UTF-8" },
      body: JSON.stringify({
        title: "Post de teste",
        body: "Corpo de teste",
        userId: 99,
      }),
    });
    const json = await res.json();
    console.log(json);
  };

  return (
    <div className="container mx-auto">
      <button onClick={handleAddNewPost}>Adicionar Novo Post</button>
      <h1 className="text-3xl">Lista de Usuários</h1>
      {loading && "carrengando..."}
      {!loading && users.length > 0 && (
        <ul>
          {users.map((item) => (
            <li key={item.id}>
              {item.name} ({item.address.city})
            </li>
          ))}
        </ul>
      )}
      {!loading && users.length === 0 && "Nao ha usuarios para exibir."}
    </div>
  );
}
