import React, { useState } from "react";

const test = () => {
  const [code, setCode] = useState();

  console.log(
    JSON.stringify({
      id: 2,
      name: "Arjun Janwani",
      userEmail: "amanjanwani1486@gmail.com",
      position: "Student",
      query: "one",
      backgroundColor: "#ffffff",
      textColor: "#000000",
      image:
        "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1658768847/profilepic2_2_f1yhyv.png",
      about:
        "RTK Query ensures that any component subscribes to the same query will always use the same data. RTK Query automatically de-dupes requests so you don't have to worry about checking in",
      projects: [
        {
          id: 1,
          name: "Amazon Clone",
          image:
            "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1658768847/profilepic2_2_f1yhyv.png",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id",
          githubLink: "https://git.com",
          liveLink: "https://live.com",
          ProjectId: 2,
        },
      ],
      work: [
        { id: 1, title: "Freelancer 2022 - present", wordId: 2 },
        { id: 2, title: "Apple 2022 - present", wordId: 2 },
      ],
      skills: [{ id: 1, value: "reactjs", label: "React Js", skillId: 2 }],
      testimonials: [
        {
          id: 1,
          name: "Aman Janwani",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id",
          testimonialId: 2,
        },
      ],
      contact: {
        id: 1,
        name: "Arjun",
        email: "amanjanwani1486@gmail.com",
        address: "pushpraj colony",
        phone: "7879599816",
        contactId: 2,
      },
      links: [
        {
          id: 1,
          name: "Instagram",
          url: "https://instagram.com",
          linkId: 2,
        },
        {
          id: 2,
          name: "Github",
          url: "https://github.com/aman-janwani",
          linkId: 2,
        },
        { id: 3, name: "Linkedin", url: "https://linkedin.com", linkId: 2 },
        { id: 4, name: "Youtube", url: "https://youtube.com", linkId: 2 },
      ],
      user: {
        id: "cl67y0hce0012xgwlywnhgk5a",
        name: "Aman janwani",
        email: "amanjanwani1486@gmail.com",
        emailVerified: null,
        image:
          "https://lh3.googleusercontent.com/a-/AFdZucpErAOgArqyNyz_G8NPJxY9qmdAxzZudE8mKX1AQw=s96-c",
      },
    })
  );

  return <div>{/* {code} */}</div>;
};

export default test;
