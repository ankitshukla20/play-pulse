import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import platforms from "../data/platforms-data";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const selectedPlatform = useGameQueryStore((s) => s.gameQuery.platform);
  const setSelectedPlatform = useGameQueryStore((s) => s.setPlatform);

  return (
    <>
      <Menu>
        <MenuButton fontSize={"15px"} as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {platforms.map((p) => (
            <MenuItem
              onClick={() => {
                setSelectedPlatform(p);
              }}
              key={p.id}
            >
              {p.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformSelector;
