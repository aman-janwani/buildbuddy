import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    return await addPortfolio(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

let aman;

async function addPortfolio(req, res) {

  const body = req.body;
  try {
    const deletePortfolio = prisma.portfolio
      .delete({
        where: {
          userEmail: body.userEmail,
        },
      })
      // .then(() => {
      //   console.log("Portfolio deleted");
      // })
      .then(() => {
        console.log("Portfolio deleted");
        fetch("https://buildbuddy.vercel.app/api/portfolio", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }).then((res) => {
          console.log("Portfolio added");
          console.log(res);
        })
      })
      .catch((err) => {
        console.log(err);
      });

      return res.status(200).json(deletePortfolio, { success: true });

  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error, success: false });
  }

  // console.log("data", body);
  // console.log("body", updated);
  // return res.status(200).json(deletePortfolio, "updated", { success: true });
}
