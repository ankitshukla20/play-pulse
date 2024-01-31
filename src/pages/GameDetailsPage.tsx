import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetailsPage = () => {
  const { slug } = useParams();
  // (variable!) in typescript is used to tell the compiler that variable will never be undefined
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;

  // !game => if game type value is undefined => typescript error => to avoid optional chaining of game i.e game?.name
  if (error || !game) throw error;

  return (
    <Box padding={5}>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </Box>
  );
};

export default GameDetailsPage;
