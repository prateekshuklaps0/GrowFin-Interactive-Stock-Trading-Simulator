import * as css from "../CssStyles/StockTableCss";
import { useState, useEffect, useRef, useReducer, useContext } from "react";
import { Space, Spin } from "antd";
import { AuthContext } from "../Context/AuthContext";
import { BsBookmark } from "react-icons/bs";
import axios from "axios";
import {
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
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
  ExternalLinkIcon,
  PlusSquareIcon,
  AddIcon,
  DeleteIcon,
} from "@chakra-ui/icons";

function init(obj) {
  return {
    firstName: obj.firstName,
    lastName: obj.lastName,
    email: obj.email,
    mobile: obj.mobile,
    accType: obj.accType,
    balance: obj.balance,
    funds: obj.funds,
    stocks: obj.stocks,
    bonds: obj.bonds,
    mutualFunds: obj.mutualFunds,
    deposits: obj.deposits,
    withdraws: obj.withdraws,
    stocksBookMark: obj.stocksBookMark,
  };
}

const updater = (state, { type, payload }) => {
  switch (type) {
    case "ItemDeleted": {
      return {
        ...state,
        stocksBookMark: payload,
      };
    }
    default: {
      return init;
    }
  }
};

function StockTable({
  Data,
  handleAvatarClick,
  IconsShow,
  Loading,
  GobalLoading,
}) {
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
  const [state, action] = useReducer(updater, init({ ...userFound }));
  const {
    firstName,
    stocksBookMark,
    lastName,
    email,
    mobile,
    id,
    deposits,
    withdraws,
    accType,
    balance,
    funds,
    stocks,
    bonds,
    mutualFunds,
  } = state;
  const toast = useToast();
  const [hoverId, setHoverId] = useState(0);
  const [bookMarkLoading, setBokmarkLoading] = useState(false);
  const [bmError, setbmError] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalData, setModalData] = useState({});
  const [quantityBuy, setQuantityBuy] = useState("");
  const [buyVal, setBuyVal] = useState("");
  const [loadingBuy, setLoadingBuy] = useState(false);

  useEffect(() => {
    setModalData((prev) => {
      return {};
    });
    setQuantityBuy((prev) => "");
    setBuyVal((prev) => "");
  }, []);

  const handleBuyBtnClick = (modalData) => {
    var BalanceToBeAded = Number(userFound.balance) + Number(buyVal);
    var stocksToBeAdded = [];
    if (userFound.stocks == 0) {
      stocksToBeAdded = [modalData];
    } else {
      stocksToBeAdded = [...userFound.stocks, modalData];
    }

    if (Number(userFound.funds) < Number(buyVal)) {
      toast({
        title: `Insufficient Funds`,
        status: "error",
        isClosable: true,
      });
    } else {
      var fundToBeDeducted = Number(userFound.funds) - Number(buyVal);
      setLoadingBuy((prev) => true);
      axios({
        url: `${URL}/users/${userFound.id}`,
        method: "patch",
        data: {
          balance: BalanceToBeAded.toFixed(2),
          stocks: stocksToBeAdded,
          funds: fundToBeDeducted.toFixed(2),
        },
      })
        .then((res) => {
          setLoadingBuy((prev) => false);
          setUserFound((prev) => res.data);
          toast({
            title: `Transaction Successfull`,
            status: "success",
            isClosable: true,
          });
          setQuantityBuy((prev) => "");
          setBuyVal((prev) => "");
        })
        .catch((err) => {
          console.log(err);
          setLoadingBuy((prev) => false);
          toast({
            title: `Something Went Wrong`,
            status: "error",
            isClosable: true,
          });
        });
    }
  };

  const handleMouseEnter = (id) => {
    setHoverId((prev) => id);
  };
  const handleMouseLeave = () => {
    setHoverId((prev) => null);
  };
  const handleBuy = (stockData) => {
    setModalData((prev) => stockData);
    onOpen();
  };
  const handleQuantityChange = (val) => {
    var inputValue = val;
    if (inputValue === "" || parseInt(inputValue) <= 1000) {
      setQuantityBuy((prev) => inputValue);
    }

    var calc = Number(quantityBuy) * Number(modalData.price);
    setBuyVal((prev) => calc.toFixed(2));
  };

  return (
    <Box>
      {GobalLoading ? (
        <Box css={css.LoadingBody}>
          <Progress
            size="xs"
            height="10px"
            colorScheme="yellow"
            isIndeterminate
          />
          <Spinner
            css={css.SpinnerBodyCss}
            thickness="6px"
            speed="0.65s"
            // emptyColor="#FAFF00"
            //color="blue.500"
            size="xl"
          />
        </Box>
      ) : (
        <TableContainer css={css.TableContainer}>
          <Table css={css.TableAtribute}>
            <Thead css={css.TableH}>
              <Tr css={css.TableHeadRow}>
                <Th css={css.TableTH}>Holdings</Th>
                <Th css={css.TableTH}>Price</Th>
                <Th css={css.TableTH} isNumeric>
                  Change % 1D
                </Th>
                <Th css={css.TableTH} isNumeric>
                  Change Price 1D
                </Th>
                <Th css={css.TableTH}>Volume</Th>
              </Tr>
            </Thead>
            <Tbody css={css.TableBody}>
              {Data?.map((item, ind) => (
                <Tr
                  css={css.BodyRow}
                  onMouseEnter={(e) => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                  key={item.id}
                >
                  <Td css={css.BodyAvatarCont}>
                    {Loading && hoverId == item.id ? (
                      <Spinner size="xl" css={css.DeleteAvatar} />
                    ) : hoverId == item.id && !Loading ? (
                      <Avatar
                        onClick={(e) => handleAvatarClick(item)}
                        css={css.DeleteAvatar}
                        icon={<IconsShow css={css.DeleteIcon} />}
                      />
                    ) : (
                      <Avatar css={css.NameAvatar} name={item.name} />
                    )}

                    <Badge css={css.SymbolText}>{item.symbol}</Badge>
                    <Text css={css.CompNameCont}>{item.name}</Text>
                  </Td>
                  <Td>
                    <Text css={css.PriceText}>{item.price} $</Text>
                  </Td>
                  <Td>
                    <Text
                      css={
                        item.changedPercent < 0
                          ? css.lowText
                          : item.changedPercent > 0
                          ? css.HighText
                          : css.PriceText
                      }
                    >
                      <Stat>
                        {item.changedPrice < 0 ? (
                          <StatArrow type="decrease" />
                        ) : item.changedPrice > 0 ? (
                          <StatArrow type="increase" />
                        ) : null}
                      </Stat>
                      {item.changedPercent}%
                    </Text>
                  </Td>
                  <Td>
                    <Text
                      css={
                        item.changedPrice < 0
                          ? css.lowText
                          : item.changedPrice > 0
                          ? css.HighText
                          : css.PriceText
                      }
                    >
                      <Stat>
                        {item.changedPrice < 0 ? (
                          <StatArrow type="decrease" />
                        ) : item.changedPrice > 0 ? (
                          <StatArrow type="increase" />
                        ) : null}
                      </Stat>
                      {item.changedPrice} $
                    </Text>
                  </Td>
                  <Td css={css.VolumeCont}>
                    <Text css={css.PriceText}>{item.volume}k</Text>
                    {hoverId == item.id && (
                      <PlusSquareIcon
                        onClick={() => handleBuy(item)}
                        css={css.BuyIcon}
                      />
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
          motionPreset="slideInBottom"
        />
        <ModalContent>
          <ModalHeader css={css.ModalHeaderCss}>
            <Avatar css={css.ModalAvatar} name={modalData.name} />{" "}
            {modalData.name}
          </ModalHeader>
          <ModalCloseButton
            onClick={() => {
              setBuyVal((prev) => "");
              setQuantityBuy((prev) => "");
            }}
          />
          <ModalBody>
            <Box css={css.SymbolVolCont}>
              <Badge colorScheme="purple">{modalData.symbol}</Badge>
              <Badge>Volume : {modalData.volume}</Badge>
            </Box>

            <Box css={css.StatsCont}>
              <Stat>
                <StatLabel>Changed % 1D</StatLabel>
                <StatHelpText>
                  <StatArrow type="increase" />
                  {modalData.changedPercent}%
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Changed Price 1D</StatLabel>
                <StatHelpText>
                  <StatArrow type="increase" />
                  {modalData.changedPrice}%
                </StatHelpText>
              </Stat>
            </Box>

            <Box css={css.StocksPriceCont}>
              <Stat>
                <StatLabel>Price</StatLabel>
                <StatNumber>{modalData.price} $</StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Stocks</StatLabel>
                <StatNumber>
                  <Input
                    type="number"
                    value={quantityBuy}
                    onChange={(e) => handleQuantityChange(e.target.value)}
                  />
                </StatNumber>
              </Stat>
            </Box>
          </ModalBody>
          <ModalFooter css={css.ModalFooterCss}>
            <Badge colorScheme="green">
              Available Funds : {userFound.funds} $
            </Badge>
            <Box css={css.BuyValAndBtnCont}>
              {quantityBuy && <Center css={css.BuyValBox}>{buyVal} $</Center>}
              {quantityBuy && (
                <Button onClick={() => handleBuyBtnClick(modalData)}>
                  Buy
                </Button>
              )}
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
export default StockTable;
