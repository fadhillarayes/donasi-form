import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@mui/material";
import logo from "../assets/logo.png";
import "../assets/Content.scss";
import Box from "@mui/material/Box";
import axios from "axios";
import { validEmail } from "./Regex";
import NumberFormat from "react-number-format";

function Content() {
  // validate email
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const validate = () => {
    if (!validEmail.test(email)) {
      setEmailErr(true);
    }
  };
  const getQuote = async () => {
    await axios.get("https://quotes.rest/qod?language=en").then((response) => {
      response.data.contents.quotes[0].quote;
      console.log("ini quote====>", response.data.contents.quotes[0].quote);
    });
  };
  const quotes = getQuote();

  // const [currency, setCurrency] = useState("Rp.");
  // const handleChange = (event) => {
  //   setCurrency(event.target.value);
  // };
  return (
    <div className="content">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            width: "50ch",
          },
        }}
      >
        <div className="content__container">
          <h1>Mari Donasi</h1>
          <div className="content__form">
            <TextField
              id="email"
              variant="outlined"
              label="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              helperText={emailErr && <p>Your email is invalid</p>}
            />
            <TextField
              id="password"
              variant="outlined"
              label="Password"
              required
            />

            <TextField id="donasi" variant="outlined" label="Donasi" required>
              <NumberFormat
                thousandsGroupStyle="thousand"
                value={2456981}
                prefix="Rp"
                decimalSeparator="."
                displayType="input"
                type="text"
                thousandSeparator={true}
                allowNegative={true}
              />
            </TextField>
            <Button
              onClick={validate}
              type="submit"
              color="primary"
              variant="contained"
            >
              Submit
            </Button>
            <h2>Quotes of the Day:</h2>
            <p></p>
          </div>
        </div>
      </Box>
      <div className="content__img">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Content;
