import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/GameTrailer";

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
        <Box padding={5}>
          <Heading>{game.name}</Heading>
          <ExpandableText>{game.description}</ExpandableText>
          <GameAttributes game={game} />
          <GameTrailer gameId={game.id} />
        </Box>
      ) : null}
    </>
  );
};

export default GameDetailsPage;
