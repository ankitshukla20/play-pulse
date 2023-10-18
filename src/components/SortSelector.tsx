import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSort: (order: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSort, sortOrder }: Props) => {
  const sorts = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSort = sorts.find((sort) => sort.value === sortOrder);
  return (
    <>
      <Menu>
        <MenuButton fontSize={"15px"} as={Button} rightIcon={<BsChevronDown />}>
          Order by: {currentSort?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {sorts.map((sort) => (
            <MenuItem
              onClick={() => onSelectSort(sort.value)}
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
