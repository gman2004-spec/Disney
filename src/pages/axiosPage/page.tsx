import { useEffect, useState } from "react";
import Image from "next/image";
import api from "../constants/api";  // Importação padrão

interface IData {
  id: number;
  name: string;
  gender: string;
  videoGame: string;
  films: string;
  image: string;
}

const AxiosPage = () => {
  const [data, setData] = useState<IData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<{ results: IData[] }>("/character");
        setData(response.data.results);
      } catch (err) {
        console.error("Erro na requisição:", err);
        setError("Erro ao carregar os dados.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <h1>Axios page client-side</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <Image src={item.image} alt={item.name} width={200} height={200} />
          <p>{item.films}</p>
          <p>{item.videoGame}</p>
          <p>{item.gender}</p>
        </div>
      ))}
    </>
  );
};

export default AxiosPage;
