import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchItem = () => {
  const [game, setGame] = useState("");
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(e) => {
        e.preventDefault();
        setSearchText(game);
        navigate("/");
        setGame("");
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
            setGame(e.target.value);
          }}
        />
      </InputGroup>
    </form>
  );
};

export default SearchItem;
