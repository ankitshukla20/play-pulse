import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import noImage from "../assets/no-image-placeholder.webp";
import getCroppedImageUrl from "../services/image-url";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const gameImage = getCroppedImageUrl(game.background_image);
  const img = gameImage || noImage;

  return (
    <Link to={"/games/" + game.slug}>
      <Card>
        <Image src={img} />
        <CardBody>
          <HStack justifyContent={"space-between"} marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms?.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
        </CardBody>
      </Card>
    </Link>
  );
};

export default GameCard;
