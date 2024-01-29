import { create } from "zustand";
import { Platform } from "./hooks/useGames";

interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

interface GameQuery {
  genre?: Genre;
  platform?: Platform;
  sortOrder?: string;
  searchQuery?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenre: (genre: Genre) => void;
  setPlatform: (platform: Platform) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {} as GameQuery,
  setSearchText: (searchQuery) => set(() => ({ gameQuery: { searchQuery } })),
  setGenre: (genre) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genre } })),
  setPlatform: (platform) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platform } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameQueryStore;
