import * as css from "../CssStyles/LogSignCss";
import { AuthContext } from "../Context/AuthContext";
import { useState, useEffect, useContext, useReducer } from "react";
import axios from "axios";
import {
  Box,
  Image,
  Text,
  Input,
  InputGroup,
  InputLeftAddon,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
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

// OTP Generator
function generateOTP() {
  const digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

const init = {
  mobile: "",
  otp: "",
  showOTP: false,
  loading: false,
  error: false,
};

const updater = (state, { type, payload }) => {
  switch (type) {
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
    // Mobile InPut Change
    case "MobileInpChange": {
      if (payload.length > 10) {
        return {
          ...state,
          mobile: state.mobile,
          otp: "",
          showOTP: false,
          loading: false,
          error: false,
        };
      } else {
        return {
          ...state,
          mobile: payload,
          otp: "",
          showOTP: false,
          loading: false,
          error: false,
        };
      }
    }
    // Loading State of geting the data
    case "LoadingUserSearch": {
      return {
        ...state,
        loading: true,
        error: false,
        otp: "",
        showOTP: false,
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
      };
    }
    // Success Request And User Found
    case "SuccessRequestAndUserFounded": {
      return {
        ...state,
        otp: "",
        showOTP: true,
        loading: false,
        error: false,
      };
    }
    // SomeThing Went Wrong
    case "SomeThingWentWrong": {
      return {
        ...state,
        mobile: "",
        otp: "",
        showOTP: false,
        loading: false,
        error: true,
      };
    }
    // User is typing OTP
    case "OTPinput": {
      return {
        ...state,
        otp: payload,
      };
    }
    // OTP Matched
    case "OPTMatched": {
      return {
        ...state,
        ...init,
      };
    }
    // Change Mobile Number
    case "ChangeMobileNumber": {
      return {
        ...state,
        otp: "",
        showOTP: false,
        loading: false,
        error: false,
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
  const [generatedOTP, setGeneratedOTP] = useState(0);

  useEffect(() => {
    setUserName((prev) => "");
    setAuth((prev) => false);
    setUserFound((prev) => {
      return {};
    });
    action({ type: "MountPhaseAction" });
  }, []);

  const handleInpChange = (e) => {
    action({ type: "MobileInpChange", payload: e.target.value });
  };

  // Function to Check If User Mobile Number exists in backend or not
  function IfUserFound() {
    action({ type: "LoadingUserSearch" });
    axios({ url: `${URL}/users`, method: "get" })
      .then((res) => {
        var found = res.data.filter(
          (item, ind) => Number(item.mobile) === Number(mobile)
        );

        if (found.length == 0) {
          // User Not Found
          toast({
            title: "User Not Found",
            description: "Please Check Your Number",
            status: "error",
            isClosable: true,
          });
          action({ type: "UserNotFound" });
        } else {
          // User Found
          var DataOfUserFound = found[0];
          setUserFound((prev) => DataOfUserFound);
          setUserName((prev) => DataOfUserFound.firstName);

          var OTPRendered = generateOTP();
          setGeneratedOTP((prev) => OTPRendered);
          toast({
            title: `OTP Sent to your Mobile`,
            status: "success",

            isClosable: true,
          });

          toast({
            title: `OTP Recieved : ${OTPRendered}`,
            position: "top",
            variant: "top-accent",
            status: "info",
            isClosable: false,
          });

          action({
            type: "SuccessRequestAndUserFounded",
            payload: DataOfUserFound,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: `Something Went Wrong`,
          description: "Please Try Again",
          status: "error",
          isClosable: true,
        });

        action({ type: "SomeThingWentWrong" });
      });
  }

  const handleContinue = () => {
    IfUserFound();
  };

  const handleOTPChange = (val) => {
    var value = val.replace(/\D/g, "");

    if (value.length <= 4) {
      action({ type: "OTPinput", payload: value });
    }
  };

  const handleSubmit = () => {
    if (otp == generatedOTP) {
      toast({
        title: `Logged In Successful`,
        status: "success",
        position: "top",
        isClosable: false,
      });
      setAuth((prev) => true);
      action({ type: "OPTMatched" });
    } else {
      toast({
        title: `OTP Incorrect`,
        status: "error",
        isClosable: true,
      });
    }
  };

  const handleChangeMobile = () => {
    action({ type: "ChangeMobileNumber" });
  };

  const handleResendOTP = () => {
    toast({
      title: `OTP Recieved : ${generatedOTP}`,
      position: "top",
      variant: "top-accent",
      status: "info",
      isClosable: false,
    });
  };

  return (
    <Box css={css.OuterCont}>
      {showOTP ? (
        <Box css={css.OTPboxCont}>
          <Text css={css.HelloText}>
            <Highlight query="Hello" styles={{ color: "#ffffff" }}>
              Hello
            </Highlight>{" "}
            {userName}{" "}
            <Highlight query="Hello" styles={{ color: "#ffffff" }}>
              !
            </Highlight>
          </Text>
          <Text onClick={handleChangeMobile} css={css.ChangeText}>
            ← Change Mobile Number
          </Text>
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
          <Text onClick={handleResendOTP} css={css.ResendCont}>
            ↻ Resend OTP
          </Text>
          <Button onClick={handleSubmit} css={css.ContinueBtnBox}>
            Submit
          </Button>
        </Box>
      ) : (
        <Box css={css.LogInBoxCont}>
          <Text css={css.WelcomeText}>Welcome</Text>
          <Text css={css.Instruction}>
            <Highlight query="Grow Fin" styles={{ color: "#FAFF00" }}>
              Please Log In with your Grow Fin Account
            </Highlight>
          </Text>
          <InputGroup>
            <InputLeftAddon css={css.InputAddon} children="+91" />
            <Input
              value={mobile}
              onChange={(e) => handleInpChange(e)}
              css={css.MobileInp}
              type="tel"
              placeholder="Enter Mobile Number"
            />
          </InputGroup>
          <Button onClick={handleContinue} css={css.ContinueBtnBox}>
            {loading ? (
              <Spinner
                thickness="2px"
                speed="0.65s"
                emptyColor="blue.200"
                color="#FAFF00"
                marginTop="4px"
                width="24px"
                height="24px"
              />
            ) : (
              "Continue"
            )}
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default LogIn;

// #ffffff;
// #FAFF00; - yellow
