import { useEffect, useContext, useState, useReducer } from "react";
import { AuthContext } from "../Context/AuthContext";
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
import {
  EditIcon,
  ExternalLinkIcon,
  PlusSquareIcon,
  AddIcon,
  DeleteIcon,
} from "@chakra-ui/icons";
import { BsBookmark, BsFillBookmarkPlusFill } from "react-icons/bs";
import LogOut from "../Elements/LogOut";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import LogSign from "../components2/LogSign";
import PaginationComp from "../Elements/Pagination";
import StockTable from "../components2/StockTable";

function getURL(URL, page) {
  return `${URL}/stocks?_page=${page}&_limit=20`;
}

function EnterApp() {
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

  useEffect(() => {
    setSliderVal((prev) => {
      return { x: 428, y: 1.5 };
    });

    setMenuSlide((prev) => {
      return { x: 10, y: 271 };
    });

    setHighlight((prev) => "Enter App");

    window.document.title = "Grow Fin | PortFolio";
  }, []);

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

  return (
    <Box style={{ color: "white" }}>
      {!isAuth ? (
        <LogSign />
      ) : (
        <Box>
          <LogOut />
          <PaginationComp currentPage={page} setPage={setPage} />
          <StockTable
            Data={data}
            handleAvatarClick={handleBookMarkClick}
            IconsShow={BsFillBookmarkPlusFill}
            Loading={bookMarkLoading}
          />
        </Box>
      )}

      <FAQ />
      <Footer />
    </Box>
  );
}
export default EnterApp;
