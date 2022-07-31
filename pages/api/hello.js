import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    return await readUser(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function readUser(req, res) {
  const body = req.body;
  try {
    const books = await prisma.user.findMany({
      include: {
        portfolio: {
          include: {
            projects: true,
            work: true,
            skills: true,
            testimonials: true,
            contact: true,
            links: true,
            user: true,
          },
        },
      },
    });
    console.log("data", books);
    return res.status(200).json(books, { success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error reading books", success: false });
  }
}
