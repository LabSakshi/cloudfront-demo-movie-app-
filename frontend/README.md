# ShivFlix – Netflix-style Video App with CloudFront Signed Cookies

A demo project showing how to securely deliver video using AWS S3, CloudFront, and signed cookies.

## Setup

1. Set up your CloudFront and S3 bucket with signed cookie restrictions.
2. Update `CLOUDFRONT_URL`, `KEY_PAIR_ID`, and place `private_key.pem` in the backend.
3. Run backend:
cd backend && node server.js

4. Run frontend:
cd frontend && npm start

