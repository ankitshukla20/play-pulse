import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <div>
      <Heading as={"h1"} marginY={5} fontSize={"5xl"}>
        {heading}
      </Heading>
    </div>
  );
};

export default GameHeading;
