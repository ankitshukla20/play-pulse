import { Box, Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

const App = () => {
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
        <Navbar />
      </GridItem>

      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <Box paddingX={3}>
          <GameHeading />
          <Stack
            direction={{ base: "column", sm: "row" }}
            spacing={3}
            marginBottom={5}
            alignItems={{ base: "flex-start" }}
          >
            <PlatformSelector />
            <SortSelector />
          </Stack>
        </Box>

        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
