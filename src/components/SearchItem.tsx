import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchItem = ({ onSearch }: Props) => {
  const [game, setgame] = useState("");
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(e) => {
        e.preventDefault();
        console.log(game);
        onSearch(game);
      }}
    >
      <InputGroup>
        <InputLeftElement>
          <BsSearch />
        </InputLeftElement>
        <Input
          borderRadius={20}
          variant="filled"
          placeholder="Search game..."
          value={game}
          onChange={(e) => {
            setgame(e.target.value);
          }}
        />
      </InputGroup>
    </form>
  );
};

export default SearchItem;
