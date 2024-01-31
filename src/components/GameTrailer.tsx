import { Text } from "@chakra-ui/react";
import useTrailer from "../hooks/useTrailer";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailer(gameId);

  if (isLoading) return null;

  if (error) return <Text>{error.message}</Text>;

  return (
    <>
      {data?.results[0] && (
        <video
          src={data.results[0].data[480]}
          poster={data.results[0].preview}
          controls
        />
      )}
    </>
  );
};

export default GameTrailer;
