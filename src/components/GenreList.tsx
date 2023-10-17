import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();

  return (
    <List>
      {genres.map((g) => (
        <ListItem key={g.id} paddingY={"6px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={"8px"}
              src={g.image_background}
            />
            <Text fontSize={"lg"}>{g.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
