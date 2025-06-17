const express = require("express");
const cookieParser = require("cookie-parser");
const cloudfront = require("aws-cloudfront-sign");
const app = express();
const PORT = 3001;

app.use(cookieParser());

const CLOUDFRONT_URL = "https://d2wf4b0x7loob7.cloudfront.net";
const KEY_PAIR_ID = "K31AGUB8DX5I58";
const PRIVATE_KEY_PATH = "./private_key.pem";

app.get("/login", (req, res) => {
  const signedCookies = cloudfront.getSignedCookies({
    keypairId: KEY_PAIR_ID,
    privateKeyPath: PRIVATE_KEY_PATH,
    expireTime: Date.now() + 30 * 60 * 1000,
    url: CLOUDFRONT_URL,
  });

  res.cookie("CloudFront-Policy", signedCookies["CloudFront-Policy"], {
    httpOnly: true,
  });
  res.cookie("CloudFront-Signature", signedCookies["CloudFront-Signature"], {
    httpOnly: true,
  });
  res.cookie(
    "CloudFront-Key-Pair-Id",
    signedCookies["CloudFront-Key-Pair-Id"],
    { httpOnly: true }
  );

  res.send({ message: "Cookies set. Now you can watch videos." });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
