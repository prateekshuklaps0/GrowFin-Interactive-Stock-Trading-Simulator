import { css } from "@emotion/react";
import { useState, useEffect, useRef, useReducer, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { BsBookmark } from "react-icons/bs";
import axios from "axios";
import {
  Box,
  Badge,
  Avatar,
  useDisclosure,
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
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
  ExternalLinkIcon,
  PlusSquareIcon,
  AddIcon,
  DeleteIcon,
} from "@chakra-ui/icons";

// CSS
const DepositAndWithDrawCont = css`
  width: 350px;
  margin: auto;
  display: flex;
  margin-top: 30px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 630px) {
    margin-top: 20px;
  }
  @media (max-width: 480px) {
    margin-top: 10px;
    width: 260px;
  }
`;
const DepositBtn = css`
  background: radial-gradient(
    94.79% 100.26% at 50% 50%,
    #1b6937 0%,
    #002d10 100%
  );
  width: 150px;
  border: 0.516317px solid #00ff0a;
  border-radius: 33.0443px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  height: 40px;
  font-size: 16.5222px;
  line-height: 20px;
  color: #ffffff;

  :hover {
    color: #faff00;
    background: radial-gradient(
      94.79% 100.26% at 50% 50%,
      #1b6937 0%,
      #002d10 100%
    );
    border: 0.516317px solid #faff00;
  }

  @media (max-width: 630px) {
    width: 130px;
    font-size: 15.5222px;
    height: 35px;
    border-radius: 18.0443px;
  }
  @media (max-width: 480px) {
    width: 110px;
    font-size: 13.5222px;
    height: 30px;
    border-radius: 10.0443px;
  }
`;
const DepositIcon = css`
  font-size: 14px;
  margin-left: 10px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
    font-size: 12px;
    margin-left: 8px;
  }
`;
const WithDrawBtn = css`
  background: radial-gradient(
    94.79% 100.26% at 50% 50%,
    #1b6937 0%,
    #002d10 100%
  );
  height: 40px;
  width: 150px;
  border: 0.516317px solid #00ff0a;
  border-radius: 33.0443px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16.5222px;
  line-height: 20px;
  color: #ffffff;

  :hover {
    color: #faff00;
    background: radial-gradient(
      94.79% 100.26% at 50% 50%,
      #1b6937 0%,
      #002d10 100%
    );
    border: 0.516317px solid #faff00;
  }

  @media (max-width: 630px) {
    width: 130px;
    font-size: 15.5222px;
    height: 35px;
    border-radius: 18.0443px;
  }
  @media (max-width: 480px) {
    width: 110px;
    font-size: 13.5222px;
    height: 30px;
    border-radius: 10.0443px;
  }
`;
const WithDrawIcon = css`
  font-size: 14px;
  margin-left: 10px;

  @media (max-width: 800px) {
  }
  @media (max-width: 480px) {
    font-size: 12px;
    margin-left: 8px;
  }
`;

function DepWithBtns({ BtnName }) {
  const toast = useToast();
  const {
    URL,
    sliderVal,
    setSliderVal,
    menuSlide,
    setMenuSlide,
    highlight,
    setHighlight,
    isAuth,
    setAuth,
    userName,
    setUserName,
    userFound,
    setUserFound,
  } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [btnText, setBtnText] = useState("Deposit");

  //   console.log(userFound);

  function PostData() {}

  useEffect(() => {
    setAmount((prev) => "");
  }, []);

  const handleDeposit = () => {
    onOpen();
    setBtnText((prev) => "Deposit");
  };

  const handleAddAmount = () => {
    const AmountToBeAded = Number(userFound.funds) + Number(amount);
    if (!amount) {
      setLoading((prev) => false);
      setAmount((prev) => "");
      toast({
        title: `Please Enter a Valid Amount`,
        status: "warning",
        isClosable: true,
      });
    } else if (AmountToBeAded >= 1000000) {
      toast({
        title: `Fund Deposit Amount Limit Exceeded`,
        status: "error",
        isClosable: true,
      });
    } else {
      setLoading((prev) => true);
      axios({
        url: `${URL}/users/${userFound.id}`,
        method: "patch",
        data: {
          funds: AmountToBeAded,
        },
      })
        .then((res) => {
          setLoading((prev) => false);
          setUserFound((prev) => res.data);
          setAmount((prev) => "");
          toast({
            title: `Transaction Successful`,
            status: "success",
            isClosable: true,
          });
        })
        .catch((err) => {
          setLoading((prev) => false);
          toast({
            title: `Something Went Wrong`,
            status: "error",
            isClosable: true,
          });
        });
    }
  };

  const handleWithDrawAmount = () => {
    if (!amount) {
      setLoading((prev) => false);
      setAmount((prev) => "");
      toast({
        title: `Please Enter a Valid Amount`,
        status: "warning",
        isClosable: true,
      });
    } else if (userFound.funds <= 0) {
      setLoading((prev) => false);
      setAmount((prev) => "");
      toast({
        title: `Insufficient Funds`,
        status: "warning",
        isClosable: true,
      });
    } else {
      const AmountToBeWithDrawed = Number(userFound.funds) - Number(amount);
      setLoading((prev) => true);
      axios({
        url: `${URL}/users/${userFound.id}`,
        method: "patch",
        data: {
          funds: AmountToBeWithDrawed,
        },
      })
        .then((res) => {
          setLoading((prev) => false);
          setUserFound((prev) => res.data);
          setAmount((prev) => "");
          toast({
            title: `Transaction Successful`,
            status: "success",
            isClosable: true,
          });
        })
        .catch((err) => {
          setLoading((prev) => false);

          toast({
            title: `Something Went Wrong`,
            status: "error",
            isClosable: true,
          });
        });
    }
  };

  const handleWithDraw = () => {
    onOpen();
    setBtnText((prev) => "WithDraw");
  };

  return (
    <Box css={DepositAndWithDrawCont}>
      <Button onClick={handleDeposit} css={DepositBtn}>
        Deposit <AddIcon css={DepositIcon} />
      </Button>
      <Button onClick={handleWithDraw} css={WithDrawBtn}>
        WithDraw <ExternalLinkIcon css={WithDrawIcon} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Deposit Funds</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              onChange={(e) => setAmount((prev) => e.target.value)}
              value={amount}
              type="number"
              placeholder="Enter Amount"
            />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={
                btnText == "Deposit" ? handleAddAmount : handleWithDrawAmount
              }
              variant="ghost"
            >
              {btnText}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
export default DepWithBtns;
