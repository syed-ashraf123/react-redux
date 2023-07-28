import { useState, useEffect, useRef } from "react";
export const Guest: React.FC = () => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState<{ name: string; age: number }[]>([]);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const changeRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    setDetails([
      {
        name: "hello",
        age: 20,
      },
    ]);

    if (changeRef.current != null) changeRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={changeRef} onChange={onChange} value={name} />
      <h1>{name}</h1>
    </div>
  );
};
