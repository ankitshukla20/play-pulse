import { useQuery } from "react-query";
import apiClient from "../services/api-client";
import { Trailer } from "../entities/Trailer";

interface FetchTrailerResponse {
  count: number;
  results: Trailer[];
}

const useTrailer = (gameId: number) => {
  const { data, error, isLoading } = useQuery<FetchTrailerResponse, Error>({
    queryKey: ["trailer", gameId],
    queryFn: () =>
      apiClient
        .get<FetchTrailerResponse>(`/games/${gameId}/movies`)
        .then((res) => res.data),
  });

  return { data, error, isLoading };
};

export default useTrailer;
