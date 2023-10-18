import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { genres, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
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
