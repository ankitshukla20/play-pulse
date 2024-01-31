import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailsPage = () => {
  const { slug } = useParams();
  // (variable!) in typescript is used to tell the compiler that variable will never be undefined
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;

  // !game => if game type value is undefined => typescript error => to avoid optional chaining of game i.e game?.name
  if (error) return <>{error.message}</>;

  return (
    <>
      {game ? (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} padding={5}>
          <Box>
            <Heading>{game.name}</Heading>
            <ExpandableText>{game.description}</ExpandableText>
            <GameAttributes game={game} />
          </Box>

          <Box>
            <GameTrailer gameId={game.id} />
            <GameScreenshots gameId={game.id} />
          </Box>
        </SimpleGrid>
      ) : null}
    </>
  );
};

export default GameDetailsPage;
