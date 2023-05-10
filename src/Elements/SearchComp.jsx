import { useState } from "react";
import { css } from "@emotion/react";
import {
  Box,
  IconButton,
  Badge,
  Avatar,
  Progress,
  Select,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  AvatarBadge,
  AvatarGroup,
  Image,
  Highlight,
  InputGroup,
  InputLeftAddon,
  useToast,
  Text,
  Input,
  Center,
  Spinner,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import {
  EditIcon,
  SearchIcon,
  CloseIcon,
  ExternalLinkIcon,
  PlusSquareIcon,
  AddIcon,
  DeleteIcon,
} from "@chakra-ui/icons";

const OuterBox = css`
  color: white;
  background: #000000;
  border: 1px solid #00ff0a;
  border-radius: 24px;
  text-align: center;

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
  }
`;
const NextPrevBtn = css`
  color: white;
  background: #000000;
  border: 1px solid #00ff0a;
  border-radius: 24px;
  text-align: center;
  margin: auto;

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
  }
`;

function SearchComp({
  searchInp,
  setSearchInp,
  handleSearch,
  setValueToBeSearched,
}) {
  const toast = useToast();
  const handleChange = (val) => {
    setSearchInp((prev) => val);
  };

  const handleClear = () => {
    setSearchInp((prev) => "");
    setValueToBeSearched((prev) => "");
  };

  return (
    <Box css={OuterBox}>
      <Input
        onChange={(e) => handleChange(e.target.value)}
        value={searchInp}
        placeholder="Search"
        type="text"
      />
      <IconButton
        onClick={handleSearch}
        aria-label="Search database"
        icon={<SearchIcon />}
      />
      <IconButton
        onClick={handleClear}
        colorScheme="blue"
        aria-label="Search database"
        icon={<CloseIcon />}
      />
    </Box>
  );
}

export default SearchComp;
