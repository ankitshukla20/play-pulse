import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchItem = () => {
  const [game, setgame] = useState("");
  const onSearch = useGameQueryStore((s) => s.setSearchText);
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(e) => {
        e.preventDefault();
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
