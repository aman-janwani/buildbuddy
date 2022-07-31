import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiPlus } from "react-icons/hi";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { addData, removeData, dataSlice, updateData } from "../store/dataSlice";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    borderRadius: "10px",
    border: "4px solid #cbf3f0",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#__next");

const ProjectsTab = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [githubLink, setGithubLink] = useState("");

  const data = useSelector((state) => state.dataSlice.data);
  const dispatch = useDispatch();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleClick = () => {
    if (name && image && description && liveLink && githubLink) {
      setProjects([
        ...projects,
        { name, image, description, liveLink, githubLink },
      ]);
      closeModal();
    }
  };

  useEffect(() => {
    if (projects.length > 0) {
      dispatch(updateData({ projects: projects }));
    }
  }, [projects]);

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
      })
      .catch((err) => console.log(err));
  };


  return (
    <div className="text-center py-5">
      <h1 className="text-2xl my-10">Projects</h1>
      <div className="grid grid-cols-3 my-10">
        {data.projects.map((project, index) => {
          return (
            <div
              key={index}
              className="flex space-x-3 hover:bg-slate-200 cursor-pointer items-center bg-slate-100 px-3 py-2 rounded-lg w-fit"
            >
              <Image
                src={project.image}
                alt="project1"
                className="rounded-lg"
                width={60}
                height={40}
              />
              <p>{project.name}</p>
            </div>
          );
        })}
      </div>
      <div className="my-5">
        <button
          onClick={() => {
            openModal();
          }}
          className="bg-[#EFF6F6] flex items-center justify-center mx-auto px-3 py-2 w-[22rem] rounded-lg"
        >
          <HiPlus className="h-5 w-5 mx-5 text-buildbuddyPurple" /> Add One More
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="text-center font-['Cairo']">
          <div className="flex flex-col space-y-3 max-w-md mx-auto my-5 justify-center">
            <h1 className="text-2xl">Projects</h1>
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
              placeholder="Project Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              className="bg-[#EFF6F6] outline-none placeholder:text-sm focus:border-buildbuddyBlueDark border-4 p-3 rounded-xl max-h-40"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="text"
              className="bg-[#EFF6F6] outline-none focus:border-buildbuddyBlueDark border-4 p-3 rounded-xl "
              placeholder="Github Link"
              value={githubLink}
              onChange={(e) => setGithubLink(e.target.value)}
            />
            <input
              type="text"
              className="bg-[#EFF6F6] outline-none focus:border-buildbuddyBlueDark border-4 p-3 rounded-xl "
              placeholder="Live Link"
              value={liveLink}
              onChange={(e) => setLiveLink(e.target.value)}
            />
            <button
              onClick={handleClick}
              className="bg-buildbuddyYellowLight hover:brightness-110 px-5 py-2 rounded-lg"
            >
              Save
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProjectsTab;
