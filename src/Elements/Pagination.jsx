import React from "react";
import { css } from "@emotion/react";
import { Box, Button, Text, ButtonGroup } from "@chakra-ui/react";

const OuterBox = css`
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

function PaginationComp({ currentPage, setPage }) {
  const totalPages = 112;

  return (
    <Box css={OuterBox}>
      <Box>
        <Button
          isDisabled={currentPage <= 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Prev
        </Button>
        <Text>{currentPage}</Text>
        <Text>of</Text>
        <Text>{totalPages}</Text>
        <Button
          isDisabled={currentPage >= totalPages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </Button>
      </Box>
      <Box></Box>
    </Box>
  );
}

export default PaginationComp;
