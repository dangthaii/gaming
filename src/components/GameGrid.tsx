import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { AxiosError } from "axios";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGamesResponse {
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((e: AxiosError) => setError(e.message));
  }, []);

  return <>{error && <Text>{error}</Text>}</>;
};

export default GameGrid;
