import { Router } from "express";
import userData from "../data/users.json" assert { type: "json" };
import jwt from "jsonwebtoken";

//This package jsonwebtoken helps us make the JSON Web Tokens and implement our JWT mechanism:
//npm i jsonwebtoken
//npm i dotenv .  to access .env file
// link to https://www.npmjs.com/package/dotenv
//The last step is to replace our hard-coded string in /routes/login.js with the value from the environment:
// token :  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YzFjMzdmNi0zZWUwLTRjMDctOWM4Zi01ODY0Zjc0ZTYyN2QiLCJpYXQiOjE3MDY1MjgxMzV9._odRap2cHwN-fem1ZtbvmlgByj5elUFijuNpluDziNA"

const router = Router();

router.post("/", (req, res) => {
  //const secretKey = "my-secret-key";
  const secretKey = process.env.AUTH_SECRET_KEY || "my-secret-key";

  const { username, password } = req.body;
  const { users } = userData;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials!" });
  }

  const token = jwt.sign({ userId: user.id }, secretKey);
  res.status(200).json({ message: "Successfully logged in!", token });
});

export default router;
