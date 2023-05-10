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
  InputRightElement,
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
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
  }
`;
const InpCss = css`
  color: white;
  background: #000000;
  border: 1px solid #00ff0a;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  text-align: center;
  height: 39px;

  &:focus {
    background: #000000;
    border: 1px solid #faff00;
  }

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
    height: 32px;
    font-size: 16px;
    display: flex;
    align_items: center;
  }
`;
const searchBtnCss = css`
  color: white;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  background: #000000;
  border: 1px solid #00ff0a;
  font-family: Inter;
  height: 39px;

  text-align: center;

  :hover {
    background: #000000;
    border: 1px solid #faff00;
  }
  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
    height: 32px;
  }
`;
const ClearBtnCss = css`
  color: white;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  :hover {
    color: #faff00;
  }

  @media (max-width: 800px) {
  }

  @media (max-width: 480px) {
    font-size: 10px;
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
      <InputGroup>
        <Input
          css={InpCss}
          onChange={(e) => handleChange(e.target.value)}
          value={searchInp}
          placeholder="Search"
          type="text"
        />
        <InputRightElement>
          {searchInp && <CloseIcon css={ClearBtnCss} onClick={handleClear} />}
        </InputRightElement>
      </InputGroup>
      <IconButton
        css={searchBtnCss}
        onClick={handleSearch}
        aria-label="Search database"
        icon={<SearchIcon />}
      />
    </Box>
  );
}

export default SearchComp;
