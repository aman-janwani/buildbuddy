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

async function addPortfolio(req, res) {
  const body = req.body;
  const deletePortfolio = prisma.portfolio
    .delete({
      where: {
        userEmail: body.userEmail,
      },
    })
    .then(() => {
      console.log("Portfolio deleted");
    })
    .finally(() => {
    prisma.portfolio
        .create({
          include: {
            projects: true,
            work: true,
            skills: true,
            testimonials: true,
            contact: true,
            links: true,
            user: true,
          },
          data: {
            name: body.name,
            userEmail: body.email,
            position: body.position,
            query: body.query,
            backgroundColor: body.backgroundColor,
            textColor: body.textColor,
            image: body.image,
            about: body.about,
            slug: body.slug,
            projects: {
              create: body.projects,
            },
            work: {
              create: body.work,
            },
            skills: {
              create: body.skills,
            },
            testimonials: {
              create: body.testimonials,
            },
            links: {
              create: body.links,
            },
            contact: {
              create: {
                name: body.contact.name,
                email: body.contact.email,
                address: body.contact.address,
                phone: body.contact.phone,
              },
            },
            user: {
              connect: {
                email: body.userEmail,
              },
            },
          },
        }).then((res) => {
          console.log("new data sent");
          console.log("new", res);
        })
        .catch((err) => {
          console.log(err);
        });
    });

  // console.log("data", body);
  // console.log("body", updated);
  return res.status(200).json(deletePortfolio, "Deleted", { success: true });
}
