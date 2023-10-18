import { Box, Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchQuery: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "260px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <Navbar
          onSearch={(searchQuery) => {
            console.log(searchQuery);
            setGameQuery((prevData) => {
              return { ...prevData, searchQuery };
            });
          }}
        />
      </GridItem>

      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) =>
              setGameQuery((prevData) => {
                return { ...prevData, genre };
              })
            }
          />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <Box paddingX={3}>
          <GameHeading gameQuery={gameQuery} />
          <Stack
            direction={{ base: "column", sm: "row" }}
            spacing={3}
            marginBottom={5}
            alignItems={{ base: "flex-start" }}
          >
            <PlatformSelector
              onSelectPlatform={(platform) => {
                setGameQuery((prevData) => {
                  return { ...prevData, platform };
                });
              }}
              selectedPlatform={gameQuery.platform}
            />
            <SortSelector
              onSelectSort={(sortValue) => {
                setGameQuery((prevData) => {
                  return { ...prevData, sortOrder: sortValue };
                });
              }}
              sortOrder={gameQuery.sortOrder}
            />
          </Stack>
        </Box>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
