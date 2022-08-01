import React, { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import Select from "react-select";
import Image from "next/image";
import TestimonialTab from "./TestimonialTab";
import ProjectsTab from "./ProjectsTab";
import { useDispatch, useSelector } from "react-redux";
import { addData, removeData, dataSlice, updateData } from "../store/dataSlice";
import ContactTab from "./ContactTab";
import { useSession } from "next-auth/react";
import _ from "lodash";
import { useRouter } from "next/router";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Tabs = ({ query, user }) => {
  const [works, setWorks] = useState("");
  const [skills, setSkills] = useState([]);
  const [newQuery, setNewQuery] = useState("");
  const [image, setImage] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.slug) {
      setNewQuery(query.slug);
    }
  }, [query.slug]);

  const { data: session } = useSession();

  const [defaultData, setDefaultData] = useState({
    name: "",
    userEmail: session.user.email,
    position: "",
    query: router.query.slug,
    slug: session.user.email
      .toLowerCase()
      .slice(0, session.user.email.indexOf("@")),
    backgroundColor: "",
    textColor: "",
    image: "",
    about: "",
    projects: [],
    work: [],
    skills: [],
    testimonials: [],
    links: [],
    contact: {
      name: "",
      email: "",
      address: "",
      phone: "",
    },
  });

  const dispatch = useDispatch();
  const data = useSelector((state) => state.dataSlice.data);

  console.log(data, "data");

  useEffect(() => {
    // dispatch(addData(defaultData));
    if (user.portfolio) {
      dispatch(addData(user.portfolio));
      setImage(user.portfolio.image);
      dispatch(
        updateData({
          slug: session.user.email
            .toLowerCase()
            .slice(0, session.user.email.indexOf("@")),
        })
      );
      // Skills
      let skillarr = user.portfolio.skills.map((skill) => {
        return { value: skill.value, label: skill.label };
      });
      dispatch(updateData({ skills: skillarr }));
      setSkills(skillarr);
      // Projects
      let projectarr = user.portfolio.projects.map((project) => {
        return {
          name: project.name,
          image: project.image,
          description: project.description,
          liveLink: project.liveLink,
          githubLink: project.githubLink,
        };
      });
      dispatch(updateData({ projects: projectarr }));
      // testimonials
      let testimonialarr = user.portfolio.testimonials.map((testimonial) => {
        return { name: testimonial.name, description: testimonial.description };
      });
      dispatch(updateData({ testimonials: testimonialarr }));
      // Links
      let linkarr = user.portfolio.links.map((link) => {
        return { name: link.name, url: link.url };
      });
      dispatch(updateData({ links: linkarr }));
      // contact
      let contactarr = {
        name: user.portfolio.contact.name,
        email: user.portfolio.contact.email,
        address: user.portfolio.contact.address,
        phone: user.portfolio.contact.phone,
      };
      dispatch(updateData({ contact: contactarr }));
      // Work
      const userWorks = user.portfolio.work.map((work) => {
        return work.title;
      });
      const workarr = user.portfolio.work.map((work) => {
        return { title: work.title };
      });
      dispatch(updateData({ work: workarr }));
      setWorks(userWorks.join("."));
    } else {
      dispatch(addData(defaultData));
    }
  }, [dispatch, defaultData, user]);

  const handleChangeImage = (e) => {
    console.log(e.target.files[0]);
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "m7poddhz");
    data.append("cloud_name", "dfk5jbk5r");
    fetch("https://api.cloudinary.com/v1_1/dfk5jbk5r/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setImage(data.url);
        dispatch(updateData({ image: data.url }));
      })
      .catch((err) => console.log(err));
  };

  const options = [
    { value: "reactjs", label: "React Js" },
    { value: "nextjs", label: "Next Js" },
    { value: "javascript", label: "Java Script" },
    { value: "mongodb", label: "Mongo DB" },
    { value: "mysql", label: "My SQL" },
    { value: "nodejs", label: "Node Js" },
    { value: "git", label: "Git" },
    { value: "tailwindcss", label: "Tailwind CSS" },
    { value: "css", label: "CSS" },
    { value: "html", label: "HTML" },
    { value: "figma", label: "Figma" },
    { value: "adobe", label: "Adobe" },
    { value: "python", label: "Python" },
    { value: "cplusplus", label: "C++" },
    { value: "chash", label: "C#" },
    { value: "java", label: "Java" },
    { value: "angularjs", label: "Angular Js" },
    { value: "vuejs", label: "Vue Js" },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      padding: 10,
    }),
    menu: (provided, state) => ({
      ...provided,
      borderRadius: "0px",
      backgroundColor: "#fafafa",
    }),
    control: (state) => ({
      backgroundColor: "#EFF6F6",
      width: "100%",
      display: "flex",
      padding: 5,
      borderRadius: "4px",
      border: "1px solid #E0E0E0",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = data;
    if (user.portfolio === null) {
      console.log("no");
      setLoading(true);
      const response = await fetch("/api/portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
        .then((res) => {
          console.log(res);
        })
        .finally(() => {
          router.reload();
          setLoading(false);
        });
    } else {
      console.log("yes");
      setLoading(true);
      const response = await fetch("/api/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
        .then((res) => {
          console.log(res);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div>
      <Tab.Group>
        <Tab.List className="w-full justify-between outline-none overflow-x-scroll space-x-3 flex">
          <Tab
            className={({ selected }) =>
              selected
                ? "px-5 py-2 bg-buildbuddyYellowLight rounded-t-xl"
                : " text-black px-5 py-2 bg-buildbuddyBlueLight rounded-t-xl"
            }
          >
            About
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "px-5 py-2 bg-buildbuddyYellowLight rounded-t-xl"
                : " text-black px-5 py-2 bg-buildbuddyBlueLight rounded-t-xl"
            }
          >
            Skills
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "px-5 py-2 bg-buildbuddyYellowLight rounded-t-xl"
                : " text-black px-5 py-2 bg-buildbuddyBlueLight rounded-t-xl"
            }
          >
            Projects
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "px-5 py-2 bg-buildbuddyYellowLight rounded-t-xl"
                : " text-black px-5 py-2 bg-buildbuddyBlueLight rounded-t-xl"
            }
          >
            Testimonial
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "px-5 py-2 bg-buildbuddyYellowLight rounded-t-xl"
                : " text-black px-5 py-2 bg-buildbuddyBlueLight rounded-t-xl"
            }
          >
            Contact
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "px-5 py-2 bg-buildbuddyYellowLight rounded-t-xl"
                : " text-black px-5 py-2 bg-buildbuddyBlueLight rounded-t-xl"
            }
          >
            More...
          </Tab>
        </Tab.List>
        <Tab.Panels className="py-10 duration-300">
          <Tab.Panel>
            <div className="text-center">
              <h1 className="text-2xl">About</h1>
              <div className="flex flex-col space-y-3 max-w-md mx-auto my-5 justify-center">
                <input
                  type="file"
                  className="text-sm text-grey-500
            file:mr-5 file:py-2 file:px-6
            file:rounded-lg file:border-0
            file:text-sm file:font-medium
            file:bg-buildbuddyYellowLight file:text-white
            hover:file:cursor-pointer hover:file:brightness-125
            hover:file:text-amber-700 "
                  onChange={handleChangeImage}
                />
                <input
                  type="text"
                  disabled={true}
                  className="bg-[#EFF6F6] h-10 outline-none focus:border-buildbuddyBlueDark border-4 p-3 rounded-xl "
                  placeholder="Image link"
                  value={image}
                />
                <input
                  type="text"
                  className="bg-[#EFF6F6] outline-none focus:border-buildbuddyBlueDark border-4 p-3 rounded-xl "
                  placeholder="Your Name"
                  value={data.name}
                  onChange={(e) => {
                    dispatch(updateData({ name: e.target.value }));
                  }}
                />
                <input
                  type="text"
                  className="bg-[#EFF6F6] uppercase outline-none focus:border-buildbuddyBlueDark border-4 p-3 rounded-xl "
                  placeholder="Position"
                  value={data.position}
                  onChange={(e) => {
                    dispatch(updateData({ position: e.target.value }));
                  }}
                />
                <textarea
                  className="bg-[#EFF6F6] outline-none focus:border-buildbuddyBlueDark border-4 p-3 rounded-xl max-h-48"
                  placeholder="About"
                  value={data.about}
                  onChange={(e) => {
                    dispatch(updateData({ about: e.target.value }));
                  }}
                />
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="text-center">
              <div className="flex flex-col space-y-3 max-w-md mx-auto my-5 justify-center">
                <h1 className="text-2xl">Works</h1>
                <textarea
                  className="bg-[#EFF6F6] outline-none placeholder:text-sm focus:border-buildbuddyBlueDark border-4 p-3 rounded-xl max-h-40"
                  placeholder="add dot (.) to end of each work list item "
                  value={works}
                  onChange={(e) => {
                    setWorks(e.target.value);
                    const workArry = e.target.value.split(".");
                    const workList = workArry.map((work) => {
                      return {
                        title: work,
                      };
                    });
                    // console.log(workList);
                    dispatch(updateData({ work: workList }));
                  }}
                />
                <h1 className="text-2xl">Skills</h1>
                <Select
                  value={skills}
                  defaultValue={skills}
                  styles={customStyles}
                  isMulti
                  options={options}
                  onChange={(selectedOption) => {
                    setSkills(selectedOption);
                    dispatch(updateData({ skills: selectedOption }));
                  }}
                />
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <ProjectsTab />
          </Tab.Panel>
          <Tab.Panel>
            <TestimonialTab />
          </Tab.Panel>
          <Tab.Panel>
            <ContactTab />
          </Tab.Panel>
          <Tab.Panel>
            <div className="text-center">
              <h1 className="text-2xl">Colors</h1>
              <div className="flex flex-col space-y-3 max-w-sm mx-auto my-5 justify-center">
                <div className="flex items-center  p-3 bg-[#EFF6F6] rounded-lg justify-between">
                  <p>Background Color</p>
                  <input
                    type="color"
                    className="rounded-sm w-8 h-8 bg-[#EFF6F6]"
                    value={data.backgroundColor}
                    onChange={(e) => {
                      dispatch(updateData({ backgroundColor: e.target.value }));
                    }}
                  />
                </div>
                <div className="flex items-center  p-3 bg-[#EFF6F6] rounded-lg justify-between">
                  <p>Text Color</p>
                  <input
                    type="color"
                    className="rounded-sm w-8 h-8 bg-[#EFF6F6]"
                    value={data.textColor}
                    onChange={(e) => {
                      dispatch(updateData({ textColor: e.target.value }));
                    }}
                  />
                </div>
              </div>
              <div
                defaultValue={data.query}
                className="flex flex-col items-center max-w-3xl mx-auto  p-3 bg-[#EFF6F6] rounded-lg justify-between"
              >
                <p className="text-lg mb-5">Design</p>
                <div className="flex flex-row justify-between w-full">
                  <input
                    type="radio"
                    id="one"
                    value="one"
                    name="design"
                    onChange={() => {
                      dispatch(updateData({ query: "one" }));
                    }}
                  />
                  <label htmlFor="one">
                    <Image
                      src="https://res.cloudinary.com/dfk5jbk5r/image/upload/v1659341721/one.png"
                      width={150}
                      height={100}
                      alt="one"
                    />
                  </label>
                  <input
                    type="radio"
                    id="two"
                    value="two"
                    name="design"
                    onChange={() => {
                      dispatch(updateData({ query: "two" }));
                    }}
                  />
                  <label htmlFor="two">
                    <Image
                      src="https://res.cloudinary.com/dfk5jbk5r/image/upload/v1659341721/two.png"
                      width={150}
                      height={100}
                      alt="one"
                    />
                  </label>
                  <input
                    type="radio"
                    id="three"
                    value="three"
                    name="design"
                    onChange={() => {
                      dispatch(updateData({ query: "three" }));
                    }}
                  />
                  <label htmlFor="three">
                    <Image
                      src="https://res.cloudinary.com/dfk5jbk5r/image/upload/v1659341721/three.png"
                      width={150}
                      height={100}
                      alt="one"
                    />
                  </label>
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <div className="flex justify-center">
        {loading ? (
          <AiOutlineLoading3Quarters className="h-5 w-5 animate-spin text-buildbuddyPurple" />
        ) : (
          ""
        )}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`hover:bg-buildbuddyYellowLight border-2 border-buildbuddyYellowLight duration-500 focus:brightness-110 px-5 py-2 w-full max-w-sm rounded-lg ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Tabs;
