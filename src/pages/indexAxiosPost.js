import { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function Home() {
  const handleAddPost = async () => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        userId: 98,
        title: "título do post",
        body: "corpo do post",
      }
    );

    if (response.data.id) {
      console.log("Deu tudo certo ...");
    } else console.log("Alguma coisa deu errado ...");
  };

  return (
    <div className="container mx-auto p-3">
      <button onClick={handleAddPost}>Inserir post</button>
    </div>
  );
}
