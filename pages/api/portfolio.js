import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    return await addPortfolio(req, res);
  } else if (req.method === "GET") {
    return await readusers(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function addPortfolio(req, res) {
  const body = req.body;
  try {
    const newEntry = await prisma.portfolio.create({
      include: {
        post: true, // All posts where authorId == 20
      },
      data: {
        name: body.name,
        userEmail: body.email,
        subject: body.subject,
        message: body.message,
        post: {
          create: body.post,
        },
      },
    });
    console.log("data", newEntry);
    console.log("body", body);
    return res.status(200).json(newEntry, { success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error creating question", success: false });
  }
}

async function readusers(req, res) {
  const body = req.body;
  try {
    const books = await prisma.user.findMany({
      include: {
       inquiry : true,
       inquiry : {
            include : {
                post : true
            }
        }
      }, 
    });
    console.log("data", books);
    return res.status(200).json(books, { success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error reading books", success: false });
  }
}
