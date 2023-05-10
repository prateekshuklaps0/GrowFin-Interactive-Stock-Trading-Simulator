import * as css from "../CssStyles/DataPageCss";
import { useEffect, useContext, useState, useReducer } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
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
import SearchComp from "../Elements/SearchComp";
import SortData from "../Elements/SortData";
import StockTable from "../components2/StockTable";

function getURL(URL, page, limit, searchInp, sortVal, orderVal) {
  if (searchInp && !sortVal) {
    // sort is false and search is true
    return `${URL}/stocks?_page=${page}&_limit=${limit}&q=${searchInp}`;
  } else if (sortVal && !searchInp) {
    // sort is true and search is false
    return `${URL}/stocks?_page=${page}&_limit=${limit}&_sort=${sortVal}&_order=${orderVal}`;
  } else if (searchInp && searchInp) {
    // both are true
    return `${URL}/stocks?_page=${page}&_limit=${limit}&_sort=${sortVal}&_order=${orderVal}&q=${searchInp}`;
  } else {
    // both are false
    return `${URL}/stocks?_page=${page}&_limit=${limit}`;
  }
}

function fixParams(val) {
  val = Number(val);
  if (!val) {
    val = 1;
  } else if (val <= 0) {
    val = 1;
  }
  return val;
}

function fixLimitParams(val) {
  val = Number(val);
  if (!val) {
    val = 15;
  } else if (val <= 0) {
    val = 15;
  }
  return val;
}

function DataPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
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
  const [hoverId, setHoverId] = useState(0);
  const [bookMarkLoading, setBokmarkLoading] = useState(false);
  const [bmError, setbmError] = useState(false);
  const [page, setPage] = useState(() =>
    fixLimitParams(searchParams.get("page"))
  );
  const [limit, setLimit] = useState(() =>
    fixLimitParams(searchParams.get("limit"))
  );
  const [totalPage, setTotalPage] = useState(1);

  // Sorting State
  const [searchInp, setSearchInp] = useState("");
  const [valueToBeSearched, setValueToBeSearched] = useState(
    searchParams.get("q") || ""
  );
  const [sortVal, setSortVal] = useState(searchParams.get("sort") || "");
  const [orderVal, setOrderVal] = useState(searchParams.get("order") || "asc");

  function fetchData(page, limit, searchInp, sortVal, orderVal) {
    setLoading((prev) => true);
    setError((prev) => false);
    axios({
      url: getURL(URL, page, limit, searchInp, sortVal, orderVal),
      method: "get",
    })
      .then((res) => {
        const totalCount = res.headers["x-total-count"];
        if (!limit) {
          const totalPageNumbers = Math.ceil(totalCount / 15);
          setTotalPage((prev) => totalPageNumbers);
        } else {
          const totalPageNumbers = Math.ceil(totalCount / limit);
          setTotalPage((prev) => totalPageNumbers);
        }

        setData((prev) => res.data);
        setLoading((prev) => false);
      })
      .catch((err) => {
        setLoading((prev) => false);
        setError((prev) => true);
      });
  }

  const handleParams = (val) => {
    if (val) {
      setSearchParams({ ...searchParams, val });
    } else {
    }
  };

  useEffect(() => {
    fetchData(page, limit, searchInp, sortVal, orderVal);
  }, [page, limit, valueToBeSearched, orderVal, sortVal]);

  useEffect(() => {
    if (valueToBeSearched && !sortVal) {
      // sort is false and search is true
      setSearchParams({ page, limit, q: valueToBeSearched });
    } else if (sortVal && !valueToBeSearched) {
      // sort is true and search is false
      setSearchParams({
        page,
        limit,
        sort: sortVal,
        order: orderVal,
      });
    } else if (sortVal && valueToBeSearched) {
      // Both are true
      setSearchParams({
        page,
        limit,
        sort: sortVal,
        order: orderVal,
        q: valueToBeSearched,
      });
    } else {
      // Both Are False
      setSearchParams({ page, limit });
    }
  }, [page, limit, valueToBeSearched, orderVal, sortVal]);

  const handleBookMarkClick = (item) => {
    var dataToBeSend = [...userFound.stocksBookMark, item];
    console.log(userFound.stocksBookMark);
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

  const handleSearch = () => {
    setValueToBeSearched((prev) => searchInp);
  };

  return (
    <Box>
      <Box css={css.FilterAndSortCont}>
        <SortData
          sortVal={sortVal}
          orderVal={orderVal}
          setSortVal={setSortVal}
          setOrderVal={setOrderVal}
        />
        <PaginationComp
          totalPage={totalPage}
          currentPage={page}
          setPage={setPage}
        />
        <SearchComp
          handleSearch={handleSearch}
          setValueToBeSearched={setValueToBeSearched}
          searchInp={searchInp}
          setSearchInp={setSearchInp}
        />
      </Box>

      <StockTable
        Data={data}
        handleAvatarClick={handleBookMarkClick}
        IconsShow={BsFillBookmarkPlusFill}
        Loading={bookMarkLoading}
        GobalLoading={loading}
      />
    </Box>
  );
}

export default DataPage;
