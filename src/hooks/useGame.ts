import { useQuery } from "react-query";
import apiClient from "../services/api-client";
import { Game } from "../entities/Game";

const useGame = (slug: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["game", slug],
    queryFn: () =>
      apiClient.get<Game>("/games/" + slug).then((res) => res.data),
  });

  return { data, error, isLoading };
};

export default useGame;
