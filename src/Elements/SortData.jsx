import { useState } from "react";
import * as css from "../CssStyles/SortDataCss";
import {
  Box,
  IconButton,
  Portal,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
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

function SortData({ setSortVal, setOrderVal, sortVal, orderVal }) {
  const [currentSort, setCurrentSort] = useState("");

  const handleSortChange = (name, current) => {
    setSortVal((prev) => name);
    setCurrentSort((prev) => current);
  };

  return (
    <Box css={css.ActiveOuterBox}>
      <Popover>
        <PopoverTrigger>
          <Button css={css.TriggerBtn}>
            {sortVal ? (
              <Text css={css.TriggerBtnText}>
                <Highlight
                  query="Sorted :"
                  styles={{ color: "White", marginRight: "10px;" }}
                >
                  Sorted :
                </Highlight>
                {currentSort}
              </Text>
            ) : (
              <Text css={css.TriggerBtnNormalText}>Sort</Text>
            )}
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader css={css.SortHeading}>-- Sort Data --</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <PopoverTrigger>
                <Text
                  css={
                    currentSort == "Price"
                      ? css.ActiveSortOption
                      : css.InActiveSortOption
                  }
                  onClick={() => handleSortChange("price", "Price")}
                >
                  Price
                </Text>
              </PopoverTrigger>
              <PopoverTrigger>
                <Text
                  css={
                    currentSort == "Change % 1D"
                      ? css.ActiveSortOption
                      : css.InActiveSortOption
                  }
                  onClick={() =>
                    handleSortChange("changedPercent", "Change % 1D")
                  }
                >
                  Change % 1D
                </Text>
              </PopoverTrigger>
              <PopoverTrigger>
                <Text
                  css={
                    currentSort == "Change Price 1D"
                      ? css.ActiveSortOption
                      : css.InActiveSortOption
                  }
                  onClick={() =>
                    handleSortChange("changedPrice", "Change Price 1D")
                  }
                >
                  Change Price 1D
                </Text>
              </PopoverTrigger>
              <PopoverTrigger>
                <Text
                  css={
                    currentSort == "Volume"
                      ? css.ActiveSortOption
                      : css.InActiveSortOption
                  }
                  onClick={() => handleSortChange("volume", "Volume")}
                >
                  Volume
                </Text>
              </PopoverTrigger>
            </PopoverBody>
            <PopoverFooter>
              <PopoverTrigger>
                <Button
                  css={css.ClearBtn}
                  onClick={() => {
                    handleSortChange("", "");
                    setOrderVal((prev) => "asc");
                  }}
                  colorScheme="blue"
                >
                  Clear
                </Button>
              </PopoverTrigger>
            </PopoverFooter>
          </PopoverContent>
        </Portal>
      </Popover>

      <Tabs variant="soft-rounded" colorScheme="#000000">
        {currentSort && (
          <TabList css={css.TabCont} colorScheme="green">
            <Tab
              _selected={{ color: "green:500" }}
              isSelected={orderVal == "asc"}
              css={orderVal == "asc" ? css.ActiveTabBtn : css.InActiveTabBtn}
              onClick={() => setOrderVal((prev) => "asc")}
            >
              Low - High
            </Tab>
            <Tab
              _selected={{ color: "green:500" }}
              isSelected={orderVal == "desc"}
              css={orderVal == "desc" ? css.ActiveTabBtn : css.InActiveTabBtn}
              onClick={() => setOrderVal((prev) => "desc")}
            >
              High - Low
            </Tab>
          </TabList>
        )}
      </Tabs>
    </Box>
  );
}

export default SortData;
