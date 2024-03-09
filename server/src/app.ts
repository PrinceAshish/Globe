import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: any, res: any) => {
  res.send("Express + TypeScript Server");
});

app.get("/get-user", async (req: any, res: any) => {
  console.log(req.body);
  const allUsers = await prisma.user.findMany()
//   console.log(allUsers)  
  res.send(allUsers);
});
app.post("/save-user", async (req: any, res: any) => {
  console.log(req.body);
  const user = await prisma.user.create({
    data: {
      first_name: "demo2",
      last_name: "demo3",
      email: "demoe2@prisma.io",
      mobile_number: '6353170484',
      password: "123456"
    },
  });

  res.send(user);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
