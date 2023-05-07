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

function SignUp({ URL }) {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [exist, setExist] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    var obj = {
      firstName: first,
      lastName: last,
      email: email,
      mobile: mobile,
    };

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
        // console.log(res);
        setLoading((prev) => false);
      })
      .catch((err) => {
        console.log(err);
        setLoading((prev) => false);
        setError((prev) => true);
      });

    setFirst((prev) => "");
    setLast((prev) => "");
    setEmail((prev) => "");
    setMobile((prev) => "");
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
            <InputLeftAddon marginRight={"5px"} children="+91" />
            <Input
              css={css.Inputs}
              onChange={(e) => setMobile((prev) => e.target.value)}
              value={mobile}
              type="number"
              placeholder="Enter Mobile No."
              required
            />
          </InputGroup>

          <Button css={css.SubmitBtn} type="submit">
            {loading ? (
              <Spinner
                css={css.SignUpSpinner}
                thickness="2px"
                speed="0.65s"
                size="xl"
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
