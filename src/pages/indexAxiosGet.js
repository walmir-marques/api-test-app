import { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function Home() {
  const handleGetPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
  };

  return (
    <div className="container mx-auto p-3">
      <button onClick={handleGetPosts}>Pegar posts</button>
    </div>
  );
}
