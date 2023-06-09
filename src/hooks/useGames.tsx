import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { AxiosError, CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGamesResponse {
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", {
        signal: controller.signal,
      })
      .then((res) => setGames(res.data.results))
      .catch((e: AxiosError) => {
        if (e instanceof CanceledError) return;
        setError(e.message);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { games, error };
};

export default useGames;
