import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";

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
      <ExpandableText>{game.description_raw}</ExpandableText>
    </Box>
  );
};

export default GameDetailsPage;
