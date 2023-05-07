import { css } from "@emotion/react";
import { Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import AllRoutes from "./Routes/Routes";

export const BoxStyle = css`
  background: #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow-x: hidden;
`;

function App() {
  return (
    <Box css={BoxStyle}>
      <NavBar />
      <AllRoutes />
    </Box>
  );
}

export default App;
