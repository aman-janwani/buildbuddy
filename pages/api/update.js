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
  let aman;
  const body = req.body;
  const deletePortfolio = prisma.portfolio
    .delete({
      where: {
        userEmail: body.userEmail,
      },
    })
    // .then(() => {
    //   console.log("Portfolio deleted");
    // })
    .finally(() => {
      console.log("Portfolio deleted");
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
          aman = res;
          console.log("aman", aman);
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json({ err, success: false });
        });
    }).catch((err) => {
      console.log(err);
    })

  // console.log("data", body);
  // console.log("body", updated);
  return res.status(200).json(aman, "updated", { success: true });
}