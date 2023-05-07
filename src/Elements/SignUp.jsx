import * as css from "../CssStyles/LogSignCss";
import { AuthContext } from "../Context/AuthContext";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  Box,
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

function SignUp({ URL, setShowSignUp }) {
  const toast = useToast();
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [exist, setExist] = useState(true);

  useEffect(() => {
    if (!exist) {
      PostData();
    }
  }, [exist]);

  function PostData() {
    setLoading((prev) => true);
    setError((prev) => false);

    axios({
      url: URL,
      method: "post",
      data: {
        firstName: first,
        lastName: last,
        email: email,
        mobile: mobile,
      },
    })
      .then((res) => {
        setLoading((prev) => false);
        toast({
          title: `Congratulations !`,
          description: "Account Created Successfully",
          position: "top",
          status: "success",
          isClosable: true,
        });

        setShowSignUp((prev) => false);
        setFirst((prev) => "");
        setLast((prev) => "");
        setEmail((prev) => "");
        setMobile((prev) => "");
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: `Something Went Wrong`,
          description: "Please Try Again",
          status: "error",
          isClosable: true,
        });
        setLoading((prev) => false);
        setError((prev) => true);
      });
  }

  function CheckIfUserExists() {
    setLoading((prev) => true);
    setError((prev) => false);

    axios({
      url: URL,
      method: "get",
    })
      .then((res) => {
        var foundUsers = res.data.filter(
          (item, ind) => Number(item.mobile) === Number(mobile)
        );
        if (foundUsers.length == 0) {
          setExist((prev) => false);
        } else {
          toast({
            title: `This Mobile Number is Already Registered`,
            status: "warning",
            isClosable: true,
          });
          setExist((prev) => true);
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
        setLoading((prev) => false);
        setError((prev) => true);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    CheckIfUserExists();
  };

  return (
    <Box css={css.SignOuterCont}>
      {/* {exist && <Text>User Already Registered</Text>} */}

      <Text css={css.HeadingText}>
        <Highlight query="Grow Fin" styles={{ color: "#FAFF00" }}>
          Open Your Grow Fin Account
        </Highlight>
      </Text>

      <form onSubmit={handleSubmit}>
        <Box css={css.FormCont}>
          <Input
            css={css.Inputs}
            onChange={(e) => setFirst((prev) => e.target.value)}
            value={first}
            type="text"
            placeholder="First Name"
            required
          />
          <Input
            css={css.Inputs}
            onChange={(e) => setLast((prev) => e.target.value)}
            value={last}
            type="text"
            placeholder="Last Name"
            required
          />
          <Input
            css={css.Inputs}
            onChange={(e) => setEmail((prev) => e.target.value)}
            value={email}
            type="email"
            placeholder="Enter Email"
            required
          />

          <InputGroup>
            <InputLeftAddon css={css.InputAddon} children="+91" />
            <Input
              css={css.MobileInp}
              type="tel"
              onChange={(e) => setMobile((prev) => e.target.value)}
              value={mobile}
              placeholder="Enter Mobile Number"
              required
            />
          </InputGroup>

          <Button type="submit" css={css.ContinueBtnBox}>
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
              "Submit"
            )}
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default SignUp;

// #ffffff;
// #FAFF00; - yellow
