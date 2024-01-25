import ms from "ms";
import { useInfiniteQuery } from "react-query";
import { GameQuery } from "../App";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  next: string | null;
  results: Game[];
}

const useGames = (gameQuery: GameQuery) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery<FetchGamesResponse, Error>({
      queryKey: ["games", gameQuery],

      queryFn: ({ pageParam = 1 }) =>
        apiClient
          .get<FetchGamesResponse>("/games", {
            params: {
              genres: gameQuery.genre?.id,
              parent_platforms: gameQuery.platform?.id,
              ordering: gameQuery.sortOrder,
              search: gameQuery.searchQuery,
              page: pageParam,
            },
          })
          .then((res) => res.data),

      getNextPageParam: (lastPage, allPages) => {
        // Determine the next page to fetch based on the previous response
        return lastPage.next ? allPages.length + 1 : undefined;
      },

      staleTime: ms("24hr"),
    });

  return {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  };
};

export default useGames;
