import React, { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import Select from "react-select";
import Image from "next/image";
import TestimonialTab from "./TestimonialTab";
import ProjectsTab from "./ProjectsTab";
import { useDispatch, useSelector } from "react-redux";
import { addData, removeData, dataSlice, updateData } from "../store/dataSlice";
import ContactTab from "./ContactTab";

const Tabs = ({query}) => {
  const [works, setWorks] = useState("");
  const [skills, setSkills] = useState([]);
  const [image, setImage] = useState("");

  const [defaultData, setDefaultData] = useState({
    name: "",
    position: "",
    query: query.slug,
    backgroundColor: "",
    textColor: "",
    image: "",
    about: "",
    work: [],
    skills: [],
    projects: [],
    testimonials: [],
    contact: {
      name: "",
      email: "",
      address: "",
      phone: "",
    },
    links: [],
  });

  const dispatch = useDispatch();
  const data = useSelector((state) => state.dataSlice.data);

  useEffect(() => {
    dispatch(addData(defaultData));
  }, [dispatch, defaultData]);

  console.log(data);

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
    { value: "mangodb", label: "Mango DB" },
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
    { value: "anglurjs", label: "Anglur Js" },
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
                    dispatch(updateData({ work: workArry }));
                  }}
                />
                <h1 className="text-2xl">Skills</h1>
                <Select
                  value={skills}
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
              <h1 className="text-2xl">About</h1>
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
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <div className="flex justify-center">
        <button className="hover:bg-buildbuddyYellowLight border-2 border-buildbuddyYellowLight duration-500 focus:brightness-110 px-5 py-2 w-full max-w-sm rounded-lg">
          Save
        </button>
      </div>
    </div>
  );
};

export default Tabs;
