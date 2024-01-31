import { Box, Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "260px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area={"aside"} marginY={5} paddingX={5}>
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

export default HomePage;
