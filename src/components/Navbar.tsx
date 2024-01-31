import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchItem from "./SearchItem";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <HStack justifyContent={"space-between"} spacing={5} padding={"10px"}>
      <Image
        src={logo}
        boxSize="60px"
        _hover={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/");
        }}
      />
      <SearchItem />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
