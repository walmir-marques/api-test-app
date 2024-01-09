import { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function Home() {
  const fileInput = useRef(null);

  const handleSendFile = async () => {
    if (fileInput.current.files && fileInput.current.files.length > 0) {
      const file = fileInput.current.files[0];

      const data = new FormData();
      data.append("Name", "Walmir");
      data.append("Arquivo", file);

      const response = await axios.post("UrlParaFazerOPost", data);
    } else alert("Selecione um arquivo");
  };

  return (
    <div className="container mx-auto p-3">
      <input type="file" ref={fileInput} />
      <button onClick={handleSendFile}>Enviar</button>
    </div>
  );
}
