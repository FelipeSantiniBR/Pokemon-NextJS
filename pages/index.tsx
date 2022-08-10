import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [pokemons, setPokemons] = useState<string[]>([]);
  useEffect(() => {
    const getTypes = async () => {
      const res = await axios.get("https://api.pokemontcg.io/v2/types");
      console.log(res.data);
    };
    getTypes();
  });

  return (
    <div>
      <Head>Pokemon API</Head>
    </div>
  );
};

export default Home;
