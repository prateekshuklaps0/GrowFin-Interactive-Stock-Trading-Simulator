import * as css from "../CssStyles/NavBar";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { NavLink, useNavigate, Navigate, redirect } from "react-router-dom";
import NavBarLogo from "../Images/NavBarImgs/NavBarLogo.svg";
import {
  useDisclosure,
  useBoolean,
  Box,
  Image,
  Text,
  Link,
  Drawer,
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { HamburgerIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

function NavLogo() {
  const Navig = useNavigate();
  return (
    <Box css={css.NavLogoCont}>
      <Image
        onClick={() => Navig("/")}
        css={css.LogoImage}
        src={NavBarLogo}
        alt="NavBarLogo"
      />
    </Box>
  );
}

// NavBar Optoins Starts Here
function NavRightItems({ highlight, sliderVal, setSliderVal }) {
  const Navi = useNavigate();
  const [activeLink, setActiveLink] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isLinkScheduled, setIsLinkScheduled] = useState(false);

  const links = [
    {
      text: "Docs",
      pos: -50,
      to: "https://github.com/prateekshuklaps0/sick-dress-4939",
    },
    { text: "Security", pos: 107, to: "/" },
    { text: "FAQ", pos: 265, to: "/" },
    { text: "Enter App", pos: 428, to: "/portfolio" },
  ];

  function HandleClick(e, link, index) {
    setActiveLink(index);

    if (e.target.innerText == "Docs") {
      Navi("/");
      if (!isLinkScheduled) {
        setIsLinkScheduled(true);
        setTimeoutId(
          setTimeout(() => {
            window.open("https://github.com/prateekshuklaps0/sick-dress-4939");
            setIsLinkScheduled(false);
            setTimeoutId(null);
          }, 300)
        );
      }
    } else if (e.target.innerText == "Security") {
      Navi("/account");
    } else if (e.target.innerText == "FAQ") {
      Navi("/faq");
    } else if (e.target.innerText == "Enter App") {
      Navi("/portfolio");
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        setIsLinkScheduled(false);
      }
    };
  }, [timeoutId]);

  return (
    <Box css={css.RightCont}>
      <Box css={css.SlideBoxCont}>
        <motion.div
          style={{
            height: "49.57px",
            width: "144.57px",
            background:
              "radial-gradient(94.79% 100.26% at 50% 50%, #1B6937 0%, #002D10 100%)",
            border: "0.516317px solid #00FF0A",
            borderRadius: "33.0443px",
          }}
          animate={sliderVal}
          transition={{ type: "linear" }}
        ></motion.div>
      </Box>
      <Box css={css.TextHolder}>
        {links.map((link, index) => (
          <Text
            key={link.text}
            onClick={(e) => {
              HandleClick(e, link, index);
            }}
            css={link.text === highlight ? css.ActiveLink : css.InActiveLink}
          >
            {link.text}
          </Text>
        ))}
      </Box>
    </Box>
  );
}

// Menu Starts Here
function Menu({
  setUserFound,
  isAuth,
  setUserName,
  setAuth,
  highlight,
  menuSlide,
  setMenuSlide,
}) {
  const DSize = ["xs", "sm", "md", "lg", "xl", "full"];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Navi = useNavigate();
  const [activeLink, setActiveLink] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isLinkScheduled, setIsLinkScheduled] = useState(false);

  const links = [
    {
      text: "Docs",
      pos: 51,
      to: "https://github.com/prateekshuklaps0/sick-dress-4939",
    },
    { text: "Security", pos: 125, to: "/" },
    { text: "FAQ", pos: 197, to: "/" },
    { text: "Enter App", pos: 271, to: "/" },
  ];

  const handleClick = () => {
    onOpen();
  };

  function HandleClick(e, link, index) {
    setActiveLink(index);

    if (e.target.innerText == "Docs") {
      Navi("/");
      if (!isLinkScheduled) {
        setIsLinkScheduled(true);
        setTimeoutId(
          setTimeout(() => {
            window.open("https://github.com/prateekshuklaps0/sick-dress-4939");
            setIsLinkScheduled(false);
            setTimeoutId(null);
          }, 300)
        );
      }
    } else if (e.target.innerText == "Security") {
      Navi("/account");
    } else if (e.target.innerText == "FAQ") {
      Navi("/faq");
    } else if (e.target.innerText == "Enter App") {
      Navi("/portfolio");
    }
    onClose();
  }

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        setIsLinkScheduled(false);
      }
    };
  }, [timeoutId]);

  const handleLogout = () => {
    setAuth((prev) => false);
    setUserName((prev) => "");
    setUserFound((prev) => {
      return {};
    });
    onClose();
  };

  return (
    <Box css={css.MenuOuterCont}>
      <HamburgerIcon onClick={() => handleClick()} css={css.MenuIcon} />

      <Drawer onClose={onClose} isOpen={isOpen} size={DSize[0]}>
        <DrawerOverlay />

        {/* Any Styles needed to apply, apply to this drawerContent */}
        <DrawerContent css={css.DrawerCss}>
          <DrawerHeader>
            <ArrowRightIcon css={css.CloseBtn} onClick={() => onClose()} />
          </DrawerHeader>

          {/* <DrawerHeader>{`drawer contents`}</DrawerHeader> */}
          <DrawerBody>
            <Box css={css.ContentCont}>
              <Box css={css.DrawerSlide}>
                <motion.div
                  style={{
                    height: "49.57px",
                    width: "144.57px",
                    background:
                      "radial-gradient(94.79% 100.26% at 50% 50%, #1B6937 0%, #002D10 100%)",
                    border: "0.516317px solid #00FF0A",
                    borderRadius: "33.0443px",
                  }}
                  animate={menuSlide}
                  transition={{ type: "linear" }}
                ></motion.div>
              </Box>
              <Box css={css.LinkHolder}>
                {links.map((link, index) => (
                  <Text
                    key={link.text}
                    onClick={(e) => {
                      HandleClick(e, link, index);
                    }}
                    css={
                      link.text === highlight
                        ? css.ActiveLink
                        : css.InActiveLink
                    }
                  >
                    {link.text}
                  </Text>
                ))}
              </Box>
            </Box>
          </DrawerBody>

          {isAuth ? (
            <DrawerFooter>
              <Button css={css.LogOutBtn} onClick={handleLogout} mr={3}>
                Log Out
              </Button>
            </DrawerFooter>
          ) : null}
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

function NavBar() {
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

  return (
    <Box css={css.NavOuterCont}>
      <NavLogo />
      <NavRightItems
        highlight={highlight}
        sliderVal={sliderVal}
        setSliderVal={setSliderVal}
      />
      <Menu
        isAuth={isAuth}
        setUserName={setUserName}
        setUserFound={setUserFound}
        setAuth={setAuth}
        highlight={highlight}
        menuSlide={menuSlide}
        setMenuSlide={setMenuSlide}
      />
    </Box>
  );
}
export default NavBar;
