import { useQuery } from "react-query";
import apiClient from "../services/api-client";
import { Screenshot } from "../entities/Screenshot";

interface FetchScreenshotResponse {
  count: number;
  results: Screenshot[];
}

const useScreenshots = (gameId: number) => {
  const { data, error, isLoading } = useQuery<FetchScreenshotResponse, Error>({
    queryKey: ["screenshots", gameId],
    queryFn: () =>
      apiClient
        .get<FetchScreenshotResponse>(`/games/${gameId}/screenshots`)
        .then((res) => res.data),
  });

  return { data, error, isLoading };
};

export default useScreenshots;
