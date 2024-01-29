import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchItem from "./SearchItem";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} spacing={5} padding={"10px"}>
      <Image src={logo} boxSize="60px" />
      <SearchItem />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
