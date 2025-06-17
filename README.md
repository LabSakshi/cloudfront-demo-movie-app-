
# CloudFront Signed Cookies Demo App

This repository contains a simple Express backend that demonstrates how to generate **CloudFront signed cookies** to securely serve private content via AWS CloudFront.

---

## Features

- Generates signed cookies (`CloudFront-Policy`, `CloudFront-Signature`, and `CloudFront-Key-Pair-Id`)
- Sets signed cookies on `/login` endpoint
- Supports secure access to CloudFront protected content using signed cookies
- Uses RSA key pair for signing requests

---

## Prerequisites

- Node.js v14+ installed
- AWS CloudFront distribution configured with **private content**
- CloudFront public key uploaded and associated with a key group
- RSA key pair (`private_key.pem` and `public_key.pem`) generated for signing

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo/server

2. Generate RSA key pair (if not already done)
openssl genrsa -out private_key.pem 2048
openssl rsa -pubout -in private_key.pem -out public_key.pem

3. Upload your public_key.pem to AWS CloudFront
Go to the AWS CloudFront Console

Navigate to Security > Public keys

Upload your public_key.pem

Note down the Key Pair ID assigned by AWS

4. Configure your backend
Edit server.js (or your backend file) to set your CloudFront info:
const CLOUDFRONT_URL = "https://your-distribution.cloudfront.net";
const KEY_PAIR_ID = "APKAEXAMPLEKEY"; // Replace with your actual Key Pair ID
const PRIVATE_KEY_PATH = "./private_key.pem";

5. Install dependencies
npm install express cookie-parser aws-cloudfront-sign

6. Run the backend server
node server.js




