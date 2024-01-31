import { Image, SimpleGrid, Text } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} marginY={3}>
      {data?.results.map((s) => (
        <Image key={s.id} src={s.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
