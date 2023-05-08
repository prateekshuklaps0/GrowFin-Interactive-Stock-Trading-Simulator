import * as css from "../CssStyles/StocksCss";
import { AuthContext } from "../Context/AuthContext";
import { useState, useEffect, useContext } from "react";
import PaginationComp from "../Elements/Pagination";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import axios from "axios";
import {
  Box,
  Avatar,
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

// const URL = process.env.REACT_APP_DEVELOPMENT_STOCKS;

function getURL(URL, page) {
  return `${URL}/stocks?_page=${page}&_limit=20`;
}

function Stocks() {
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hoverId, setHoverId] = useState(0);
  const [bookMarkLoading, setBokmarkLoading] = useState(false);
  const [bmError, setbmError] = useState(false);

  function fetchData(page) {
    setLoading((prev) => true);
    setError((prev) => false);
    axios({
      url: getURL(URL, page),
      method: "get",
    })
      .then((res) => {
        setData((prev) => res.data);
        setLoading((prev) => false);
      })
      .catch((err) => {
        setLoading((prev) => false);
        setError((prev) => true);
      });
  }

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const handleBookMarkClick = (item) => {
    var dataToBeSend = [...userFound.stocksBookMark, item];
    //console.log(dataToBeSend);
    const checkAlready = userFound.stocksBookMark.filter(
      (stock, ind) => Number(stock.id) == Number(item.id)
    );
    if (!checkAlready.length <= 0) {
      toast({
        title: `Item Already added to BookMarks`,
        status: "warning",
        isClosable: true,
      });
    } else {
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
          toast({
            title: `Added To BookMarks`,
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
    }
  };

  const handleMouseEnter = (id) => {
    setHoverId((prev) => id);
  };
  const handleMouseLeave = () => {
    setHoverId((prev) => null);
  };

  return (
    <Box css={css.OuterCont}>
      <PaginationComp currentPage={page} setPage={setPage} />
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Holdings</Th>
              <Th>Price</Th>
              <Th isNumeric>Change % 1D</Th>
              <Th isNumeric>Change Price 1D</Th>
              <Th>Volume</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((item, ind) => (
              <Tr
                onMouseEnter={(e) => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
                key={item.id}
              >
                <Td>
                  {hoverId == item.id ? (
                    <Avatar
                      icon={
                        <BsFillBookmarkPlusFill
                          onClick={(e) => handleBookMarkClick(item)}
                        />
                      }
                    />
                  ) : (
                    <Avatar name={item.name} />
                  )}

                  <Text>{item.symbol}</Text>
                  <Text>{item.name}</Text>
                </Td>
                <Td>
                  <Text>{item.price}</Text>
                </Td>
                <Td>
                  <Text>{item.changedPercent}</Text>
                </Td>
                <Td>
                  <Text>{item.changedPrice}</Text>
                </Td>
                <Td>
                  <Text>{item.volume}</Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Stocks;
