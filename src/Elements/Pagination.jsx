import React, { useState } from "react";
import * as css from "../CssStyles/PaginationCss";
import { Box, Button, Text, Input, ButtonGroup } from "@chakra-ui/react";
import {
  EditIcon,
  ExternalLinkIcon,
  PlusSquareIcon,
  AddIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  DeleteIcon,
} from "@chakra-ui/icons";

function PaginationComp({ totalPage, currentPage, setPage }) {
  const [gotoVal, setGotoVal] = useState("");

  const GotoChange = (val) => {
    if (val <= totalPage) {
      setGotoVal((prev) => val);
    }
  };

  const handleGotoClick = () => {
    setPage((prev) => Number(gotoVal));
    setGotoVal((prev) => "");
  };

  return (
    <Box css={css.OuterBox}>
      <Box css={css.PagesCont}>
        <Button
          css={css.NextPrevBtn}
          isDisabled={currentPage <= 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          <ArrowLeftIcon css={css.ArrowIconsCss} />
        </Button>
        <Box css={css.PageDisplayCont}>
          <Text style={{ color: "#FAFF00" }}>{currentPage}</Text>
          <Text>of</Text>
          <Text>{totalPage}</Text>
        </Box>
        <Button
          css={css.NextPrevBtn}
          isDisabled={currentPage >= totalPage}
          onClick={() => setPage((prev) => prev + 1)}
        >
          <ArrowRightIcon css={css.ArrowIconsCss} />
        </Button>
      </Box>

      <Box css={css.GoToCont}>
        {gotoVal && (
          <Button css={css.GoToBtn} onClick={handleGotoClick}>
            Go To
          </Button>
        )}
        <Input
          css={gotoVal == "" ? css.GoToInputEmpty : css.GoToInput}
          value={gotoVal}
          type="number"
          onChange={(e) => GotoChange(e.target.value)}
          placeholder="Go To Page"
        />
      </Box>
    </Box>
  );
}

export default PaginationComp;
