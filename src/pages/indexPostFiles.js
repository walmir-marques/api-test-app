import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [legend, setLegend] = useState("");
  const fileInputRef = useRef(null);

  const handleFileSend = async () => {
    if (fileInputRef.current?.files && fileInputRef.current.files.length > 0) {
      const fileItem = fileInputRef.current.files[0];
      const allowed = ["image/jpg", "image/jpeg", "image/png"];

      if (allowed.includes(fileItem.type)) {
        const data = new FormData();
        data.append("image", fileItem);
        data.append("legend", legend);

        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: { "Content-type": "multipart/form-data" },
          body: data,
        });
        const json = await res.json();
        console.log(json);
      } else alert("Tipo de arquivo nao suportado!!!");
    } else alert("Selecione um arquivo !!!");
  };

  return (
    <div className="container mx-auto p-3">
      <h1 className="text-3xl">Upload de Arquivos</h1>
      <div className="max-w-md flex flex-col gap-3 border border-dotted border-white p-3 mt-4">
        <input type="file" ref={fileInputRef} />
        <input
          className="p-3 rounded-md text-black "
          type="text"
          placeholder="Digite uma legenda ... "
          value={legend}
          onChange={(e) => setLegend(e.target.value)}
        />
        <button onClick={handleFileSend}>Enviar Arquivo</button>
      </div>
    </div>
  );
}
