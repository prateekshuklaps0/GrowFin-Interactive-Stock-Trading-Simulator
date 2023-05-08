import * as css from "../CssStyles/AccountDetailCss";
import { useEffect, useContext, useState, useReducer } from "react";
import {
  EditIcon,
  ExternalLinkIcon,
  PlusSquareIcon,
  AddIcon,
  DeleteIcon,
} from "@chakra-ui/icons";
import { AuthContext } from "../Context/AuthContext";
import { BsBookmark } from "react-icons/bs";
import axios from "axios";
import {
  Box,
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

function AccountDetail({ userData, setUserData }) {
  const toast = useToast();
  const [state, action] = useReducer(updater, init({ ...userData }));
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
  const [hoverId, setHoverId] = useState(0);
  const [bookMarkLoading, setBokmarkLoading] = useState(false);
  const [bmError, setbmError] = useState(false);

  // Profile Edited States
  const [activateEdit, setActivateEdit] = useState(false);
  const [editedLoading, setEditedLoading] = useState(false);

  useEffect(() => {
    setActivateEdit((prev) => false);
  }, []);

  const handleDeleteClick = (item) => {
    var dataToBeSend = userFound.stocksBookMark.filter(
      (stock, ind) => Number(stock.id) != Number(item.id)
    );
    setBokmarkLoading((prev) => true);
    setbmError((prev) => false);
    axios({
      url: `${URL}/users/${userFound.id}`,
      method: "patch",
      data: {
        stocksBookMark: dataToBeSend,
      },
    })
      .then((res) => {
        console.log(res.data);
        action({ type: "ItemDeleted", payload: res.data.stocksBookMark });
        toast({
          title: `BookMark Deleted`,
          status: "success",
          isClosable: true,
        });
        setBokmarkLoading((prev) => false);
        setUserFound((prev) => {
          return {
            ...prev,
            stocksBookMark: dataToBeSend,
          };
        });
      })
      .catch((err) => {
        toast({
          title: `Something Went Wrong`,
          status: "error",
          isClosable: true,
        });

        setBokmarkLoading((prev) => false);
        setbmError((prev) => true);
      });
  };

  const handleCancel = () => {
    setActivateEdit((prev) => false);
  };

  const handleMouseEnter = (id) => {
    setHoverId((prev) => id);
  };
  const handleMouseLeave = () => {
    setHoverId((prev) => null);
  };

  return (
    <Box css={css.Outer}>
      <Box css={css.EditSaveCont}>
        {activateEdit ? (
          <Box css={css.EditCont}>
            <Button css={css.SaveCloseBtn}>Save</Button>
            <Button onClick={handleCancel} css={css.SaveCloseBtn}>
              Cancel
            </Button>
          </Box>
        ) : (
          <EditIcon
            onClick={() => setActivateEdit((prev) => true)}
            css={css.EditIcon}
          />
        )}
      </Box>
      {editedLoading && (
        <Progress
          colorScheme="green"
          css={css.UserAccountProgress}
          size="xs"
          isIndeterminate
        />
      )}

      <Box css={css.UserAccountCont}>
        <Box css={css.FirstAndLastNameCont}>
          <Box css={css.FirstNameCont}>
            <Text css={css.FirstNameHead}>First Name :</Text>
            <Input
              css={css.FirstNameInp}
              type="text"
              placeholder="First Name"
            />
          </Box>
          <Box css={css.LastNameCont}>
            <Text css={css.LastNameHead}>Last Name :</Text>
            <Input css={css.LastNameInp} type="text" placeholder="Last Name" />
          </Box>
        </Box>

        <Box css={css.FirstAndLastNameCont}>
          <Box css={css.FirstNameCont}>
            <Text css={css.FirstNameHead}>Email :</Text>
            <Input css={css.FirstNameInp} type="email" placeholder="Email" />
          </Box>
          <Box css={css.LastNameCont}>
            <Text css={css.LastNameHead}>Mobile :</Text>
            <InputGroup css={css.MobileInputGroup}>
              <InputLeftAddon css={css.MobileCountryCode} children="+91" />
              <Input
                css={css.MobileInp}
                type="tel"
                placeholder="Enter Mobile Number"
                required
              />
            </InputGroup>
          </Box>
        </Box>

        <Box css={css.AccountTypeCont}>
          <Text css={css.AccountTypeHead}>Account Type :</Text>
          <Select
            css={css.AccountTypeSelect}
            icon=""
            placeholder="Account Type"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
      </Box>

      {/* Account Statistics */}

      <Text css={css.StatisticHead}>Account Statistics</Text>
      <Box css={css.DepositAndWithDrawCont}>
        <Button css={css.DepositBtn}>
          Deposit <AddIcon css={css.DepositIcon} />
        </Button>
        <Button css={css.WithDrawBtn}>
          WithDraw <ExternalLinkIcon css={css.WithDrawIcon} />
        </Button>
      </Box>

      <Box css={css.BalanceAndFundCont}>
        <Box css={css.BalanceCont}>
          <Text css={css.BalanceText}>Available Balance : </Text>
          <Text css={css.BalanceValue}>0 $</Text>
        </Box>
        <Box css={css.BalanceCont}>
          <Text css={css.BalanceText}>Available Funds : </Text>
          <Text css={css.BalanceValue}>0 $</Text>
        </Box>
      </Box>

      <Text css={css.HoldingText}>Total Holdings</Text>

      <Box css={css.HoldingCont}>
        <Text css={css.StocksText}>
          <Highlight query="Equity :" styles={{ color: "white" }}>
            Equity :
          </Highlight>{" "}
          0%
        </Text>
        <Text css={css.StocksText}>
          <Highlight query="Bonds :" styles={{ color: "white" }}>
            Bonds :
          </Highlight>{" "}
          0%
        </Text>
        <Text css={css.StocksText}>
          <Highlight query="Others :" styles={{ color: "white" }}>
            Others :
          </Highlight>{" "}
          0%
        </Text>
      </Box>

      {/* FAFF00 */}
      {/* stocksBookMark */}
      <Box css={css.BookMarksOuterCont}>
        <Text css={css.BookMarkText}>
          BooksMarks <BsBookmark css={css.BookMarkTextIcon} />
        </Text>

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

            {/* FAFF00 */}
            <Tbody css={css.TableBody}>
              {stocksBookMark?.map((item, ind) => (
                <Tr
                  css={css.BodyRow}
                  onMouseEnter={(e) => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                  key={item.id}
                >
                  <Td css={css.BodyAvatarCont}>
                    {hoverId == item.id ? (
                      <Avatar
                        css={css.DeleteAvatar}
                        icon={
                          <DeleteIcon
                            css={css.DeleteIcon}
                            onClick={(e) => handleDeleteClick(item)}
                          />
                        }
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
                      {item.changedPercent}%
                    </Text>
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
                      {item.changedPrice} $
                    </Text>
                  </Td>
                  <Td css={css.VolumeCont}>
                    <Text css={css.PriceText}>{item.volume}k</Text>
                    {hoverId == item.id && <PlusSquareIcon css={css.BuyIcon} />}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default AccountDetail;
