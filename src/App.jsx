import { useState, useEffect } from "react";

export default function App() {
  const [fecha, setFecha] = useState(new Date().toLocaleString());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFecha(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <main>
      <h1>Hola, soy Samuel - aprendiz ADSO</h1>
      <p>En este curso espero aprender a desarrollar interfaces modernas con ReactJS,
  mejorar mis habilidades en JavaScript y crear aplicaciones web dinámicas. </p>
      <p>Fecha y hora actual: {fecha}</p>
    </main>
  );
}
