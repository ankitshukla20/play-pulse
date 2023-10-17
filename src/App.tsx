import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

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
        <Box paddingLeft={3}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5} marginBottom={5}>
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
          </HStack>
        </Box>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
