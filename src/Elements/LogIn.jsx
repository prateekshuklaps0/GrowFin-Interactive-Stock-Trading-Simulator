import * as css from "../CssStyles/LogSignCss";
import { AuthContext } from "../Context/AuthContext";
import { useState, useEffect, useContext, useReducer } from "react";
import axios from "axios";
import { Spin } from "antd";
import {
  Box,
  Image,
  Text,
  Input,
  InputGroup,
  InputLeftAddon,
  useToast,
  HStack,
  PinInput,
  PinInputField,
  Center,
  Spinner,
  Highlight,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

const init = {
  mobile: "",
  otp: "",
  showOTP: false,
  loading: false,
  error: false,
  showNotFoundToast: false,
};

const updater = (state, { type, payload }) => {
  switch (type) {
    // Mobile InPut Change
    case "MobileInpChange": {
      if (payload.length > 10) {
        return {
          ...state,
          mobile: state.mobile,
          showNotFoundToast: false,
          otp: "",
          showOTP: false,
          loading: false,
          error: false,
        };
      } else {
        return {
          ...state,
          mobile: payload,
          showNotFoundToast: false,
          otp: "",
          showOTP: false,
          loading: false,
          error: false,
        };
      }
    }
    // Mount Phase
    case "MountPhaseAction": {
      return {
        ...state,
        otp: "",
        showOTP: false,
        loading: false,
        error: false,
      };
    }
    // Loading State of geting the data
    case "LoadingUserSearch": {
      return {
        ...state,
        loading: true,
        error: false,
        otp: "",
        showOTP: false,
        loading: false,
        error: false,
        showNotFoundToast: false,
      };
    }
    // User Not Found After Entering Mobile Number
    case "UserNotFound": {
      return {
        ...state,
        otp: "",
        showOTP: false,
        loading: false,
        error: false,
        showNotFoundToast: true,
      };
    }
    default: {
      return init;
    }
  }
};

function LogIn({ userName, setUserName, URL, setAuth, setUserFound }) {
  const toast = useToast();
  const [state, action] = useReducer(updater, init);
  const { mobile, otp, showOTP, loading, error, showNotFoundToast } = state;

  useEffect(() => {
    setUserName((prev) => "");
    setAuth((prev) => false);
    setUserFound((prev) => {
      return {};
    });
    toast({
      position: "bottom-left",
      render: () => (
        <Box color="white" p={3} bg="blue.500">
          Hello World
        </Box>
      ),
    });
    action({ type: "MountPhaseAction" });
  }, []);

  // Manage Toasts

  const handleInpChange = (e) => {
    action({ type: "MobileInpChange", payload: e.target.value });
  };

  // Function to Check If User Mobile Number exists in backend or not
  function IfUserFound() {
    action({ type: "LoadingUserSearch" });
    axios({ url: URL, method: "get" })
      .then((res) => {
        var found = res.data.filter(
          (item, ind) => Number(item.mobile) == Number(mobile)
        );
        if (found.length == 0) {
          // User Not Found
          action({ type: "UserNotFound" });
        } else {
          // User Found
          var DataOfUserFound = res.data[0];
          setUserFound((prev) => DataOfUserFound);
          setUserName((prev) => DataOfUserFound.firstName);
          action({
            type: "SuccessRequestAndUserFounded",
            payload: DataOfUserFound,
          });
        }
      })
      .catch((err) => console.log(err));
  }

  const handleContinue = () => {
    IfUserFound();
  };

  const handleOTPChange = (val) => {
    var value = val.replace(/\D/g, "");

    if (value.length <= 4) {
      //   setOtp((prev) => value);
    }
  };
  const handleSubmit = () => {};

  return (
    <Box css={css.OuterCont}>
      {userName ? (
        <Text css={css.HelloText}>
          <Highlight query="Hello" styles={{ color: "#ffffff" }}>
            Hello
          </Highlight>{" "}
          {userName}{" "}
          <Highlight query="!" styles={{ color: "#ffffff" }}>
            !
          </Highlight>
        </Text>
      ) : (
        <Box css={css.WelcomeCont}>
          <Text css={css.WelcomeText}>Welcome</Text>
          <Text css={css.LogInText}>
            <Highlight query="Grow Fin" styles={{ color: "#FAFF00" }}>
              Please Log In with Your Grow Fin Account
            </Highlight>
          </Text>
        </Box>
      )}

      <Box css={css.InputCont}>
        {showOTP && <Text css={css.ChangeText}>← Change Mobile Number</Text>}

        {showOTP ? (
          <Box css={css.InputPinCont}>
            <PinInput
              css={css.PinInputCss}
              value={otp}
              onChange={handleOTPChange}
              onComplete={handleOTPChange}
              placeholder="0"
              otp
            >
              <PinInputField css={css.OtpInp} />
              <PinInputField css={css.OtpInp} />
              <PinInputField css={css.OtpInp} />
              <PinInputField css={css.OtpInp} />
            </PinInput>
          </Box>
        ) : (
          <InputGroup>
            <InputLeftAddon marginRight="5px" children="+91" />
            <Input
              css={css.MobileInp}
              onChange={(e) => handleInpChange(e)}
              value={mobile}
              type="number"
              placeholder="Enter Mobile No."
            />
          </InputGroup>
        )}

        {showOTP && <Box css={css.ResendCont}>↻ Resend OTP</Box>}

        {!showOTP ? (
          <Center css={css.ContinueBtnBox} onClick={handleContinue}>
            {loading ? (
              <Spinner css={css.SpinnerCss} thickness="2px" speed="0.65s" />
            ) : (
              <Text css={css.ContinueText}>Continue</Text>
            )}
          </Center>
        ) : (
          <Center css={css.ContinueBtnBox} onClick={handleSubmit}>
            <Text css={css.SubmitText}>Submit</Text>
          </Center>
        )}
      </Box>
    </Box>
  );
}

export default LogIn;

// #ffffff;
// #FAFF00; - yellow
