import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import CriticScore from "./CriticScore";
import Attribute from "./Attribute";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid as={"dl"} columns={2}>
      <Attribute term="Platforms">
        {game.parent_platforms.map((p) => (
          <Text key={p.platform.id}>{p.platform.name}</Text>
        ))}
      </Attribute>

      <Attribute term="Metascore">
        <CriticScore score={game.metacritic} />
      </Attribute>

      <Attribute term="Genres">
        {game.genres.map((g) => (
          <Text key={g.id}>{g.name}</Text>
        ))}
      </Attribute>

      <Attribute term="Publishers">
        {game.publishers.map((p) => (
          <Text key={p.id}>{p.name}</Text>
        ))}
      </Attribute>
    </SimpleGrid>
  );
};

export default GameAttributes;
