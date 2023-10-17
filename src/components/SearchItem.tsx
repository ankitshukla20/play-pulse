import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchItem = () => {
  return (
    <InputGroup>
      <InputLeftElement>
        <BsSearch />
      </InputLeftElement>
      <Input borderRadius={20} variant="filled" placeholder="Search game..." />
    </InputGroup>
  );
};

export default SearchItem;
