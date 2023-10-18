import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import genres from "../data/genres-data";

interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {genres.map((g) => (
          <ListItem key={g.id} paddingY={"6px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={"8px"}
                src={g.image_background}
              />
              <Button
                fontWeight={g.id === selectedGenre?.id ? "bold" : "normal"}
                variant={"link"}
                fontSize={"lg"}
                onClick={() => {
                  onSelectGenre(g);
                }}
              >
                {g.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
