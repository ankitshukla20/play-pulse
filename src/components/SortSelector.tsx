import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const sorts = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const currentSort = sorts.find((sort) => sort.value === sortOrder);

  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  return (
    <>
      <Menu>
        <MenuButton fontSize={"15px"} as={Button} rightIcon={<BsChevronDown />}>
          Order by: {currentSort?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {sorts.map((sort) => (
            <MenuItem
              onClick={() => setSortOrder(sort.value)}
              key={sort.label}
              value={sort.value}
            >
              {sort.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
